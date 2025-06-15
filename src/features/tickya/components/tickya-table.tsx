import { cloneElement } from "react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import clsx from "clsx";
import {
  LucideArrowUpRightFromSquare,
  LucideEllipsis,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tickyaPath, tickyasPath } from "@/paths";
import { TICKYA_ICONS } from "../constants";
import { getTickyas } from "../queries/get-tickyas";

const TickyaTable = async () => {
  const tickyas = await getTickyas();

  const handleDeleteTickya = async (formData: FormData) => {
    "use server";
    const id = formData.get("id") as string;

    await prisma.tickya.delete({
      where: { id },
    });

    revalidatePath(tickyasPath());
  };

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
            <form action={handleDeleteTickya}>
              <input type="hidden" name="id" value={tickya.id} />
              <Button variant="destructive" size="icon" type="submit">
                <LucideTrash className="h-4 w-4" />
              </Button>
            </form>
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
