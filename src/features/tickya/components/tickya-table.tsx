import { cloneElement } from "react";
import clsx from "clsx";
import { Placeholder } from "@/components/placeholder";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tickya } from "@/generated/prisma";
import { TICKYA_ICONS } from "../constants";
import { getTickyas } from "../queries/get-tickyas";
import { SearchParams } from "../search-params";
import { TickyaRowActions } from "./tickya-row";

type TickyaTableProps = {
  searchParams: SearchParams;
};

const TickyaTable = async ({ searchParams }: TickyaTableProps) => {
  const tickyas: Tickya[] = await getTickyas(searchParams);

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
        {tickyas.length ? (
          tickyas.map((tickya) => {
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
                  <TickyaRowActions tickya={tickya} tickyaId={tickya.id} />
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="py-8">
              <div className="flex w-full justify-center">
                <Placeholder label="No records found" />
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export { TickyaTable };
