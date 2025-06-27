"use client";

import { useTransition } from "react";
import Link from "next/link";
import {
  LucideArrowUpRightFromSquare,
  LucideLoaderCircle,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/confirm-dialog";
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
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteTickya(tickyaId);
        toast.success("Record deleted");
      } catch (err) {
        toast.error(`Failed to delete: ${err}`);
      }
    });
  };

  return (
    <>
      <Button variant="outline" size="icon" asChild>
        <Link prefetch href={tickyaPath(tickyaId)}>
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

      <ConfirmDialog
        action={handleDelete}
        trigger={
          <Button
            variant="destructive"
            size="icon"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <LucideLoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <LucideTrash className="h-4 w-4" />
            )}
          </Button>
        }
      />
    </>
  );
};

export { TickyaRowActions };
