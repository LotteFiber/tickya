import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TickyaTable } from "@/features/tickya/components/tickya-table";
import { TickyaUpsertForm } from "@/features/tickya/components/tickya-upsert-form";

const TickyasPage = () => {
  const createButton = (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create a record</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>A new record will be created</DialogTitle>
          <DialogDescription>
            <TickyaUpsertForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Records Page" button={createButton} />

      <Suspense fallback={<Spinner />}>
        <TickyaTable />
      </Suspense>
    </div>
  );
};

export default TickyasPage;
