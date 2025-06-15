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
import { TickyaCreateForm } from "@/features/tickya/components/tickya-create-form";
import { TickyaTable } from "@/features/tickya/components/tickya-table";

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
            <TickyaCreateForm />
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
