import clsx from "clsx";
import { LucideEllipsis, LucidePen, LucideTrash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { initialTickyas } from "@/data";

const TICKYA_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TickyasPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickya Page</h2>
        <p className="text-muted-foreground text-sm">
          All your tickya at one place
        </p>
      </div>

      <Separator />

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
