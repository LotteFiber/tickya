import clsx from "clsx";
import {
  LucideArrowUpRightFromSquare,
  LucideEllipsis,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { initialTickyas } from "@/data";
import { tickyaPath } from "@/paths";

const TICKYA_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TickyasPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Records Page" />

      <Table className="animate-fade-in-from-top">
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>HN</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>AN</TableHead>
            <TableHead>Department</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialTickyas.map((tickya) => {
            const detailButton = (
              <Button variant="outline" size="icon" asChild>
                <Link href={tickyaPath(tickya.id)}>
                  <LucideArrowUpRightFromSquare className="h-4 w-4" />
                </Link>
              </Button>
            );

            const editButton = (
              <Button variant="outline" size="icon">
                <LucidePen className="h-4 w-4" />
              </Button>
            );

            const deleteButton = (
              <Button variant="destructive" size="icon">
                <LucideTrash className="h-4 w-4" />
              </Button>
            );

            const moreMenuButton = (
              <Button variant="ghost" size="icon">
                <LucideEllipsis className="h-4 w-4" />
              </Button>
            );

            const buttons = (
              <>
                {detailButton}
                {editButton}
                {deleteButton}
                {moreMenuButton}
              </>
            );

            return (
              <TableRow
                key={tickya.id}
                className={clsx({ "line-through": tickya.status === "DONE" })}
              >
                <TableCell>{TICKYA_ICONS[tickya.status]}</TableCell>
                <TableCell>{tickya.HN}</TableCell>
                <TableCell>{tickya.patientName}</TableCell>
                <TableCell>{tickya.name}</TableCell>
                <TableCell>{tickya.AN}</TableCell>
                <TableCell>{tickya.department}</TableCell>
                <TableCell className="flex justify-end gap-x-2">
                  {buttons}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TickyasPage;
