"use client";

import Link from "next/link";
import {
  LucideArrowUpRightFromSquare,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { tickyaPath } from "@/paths";
import { deleteTickya } from "../actions/delete-tickya";
import { Tickya } from "../type";
import { TickyaUpsertForm } from "./tickya-upsert-form";

type TickyaRowActionsProps = {
  tickya: Tickya;
  tickyaId: string;
};

const TickyaRowActions = ({ tickya, tickyaId }: TickyaRowActionsProps) => {
  return (
    <>
      <Button variant="outline" size="icon" asChild>
        <Link href={tickyaPath(tickyaId)}>
          <LucideArrowUpRightFromSquare className="h-4 w-4" />
        </Link>
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <LucidePen className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Record</DialogTitle>
            <DialogDescription>
              Update the details for this record.
            </DialogDescription>
          </DialogHeader>
          <TickyaUpsertForm tickya={tickya} />
        </DialogContent>
      </Dialog>

      <form action={deleteTickya}>
        <input type="hidden" name="id" value={tickyaId} />
        <Button variant="destructive" size="icon" type="submit">
          <LucideTrash className="h-4 w-4" />
        </Button>
      </form>
    </>
  );
};

export { TickyaRowActions };
