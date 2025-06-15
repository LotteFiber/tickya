import clsx from "clsx";
import {
  LucideArrowUpRightFromSquare,
  LucideEllipsis,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { tickyaPath } from "@/paths";

import { TICKYA_ICONS } from "../constants";
import { getTickyas } from "../queries/get-tickyas";

const TickyaTable = async () => {
  const tickyas = await getTickyas();

  return (
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
        {tickyas.map((tickya) => {
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
              <TableCell>
                {cloneElement(TICKYA_ICONS[tickya.status], {
                  className: "w-4 h-4",
                })}
              </TableCell>
              <TableCell>{tickya.HN}</TableCell>
              <TableCell>{tickya.patientName}</TableCell>
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
  );
};

export { TickyaTable };
