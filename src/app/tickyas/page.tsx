import { Suspense } from "react";
import { redirect } from "next/navigation";
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
import { getAuth } from "@/features/auth/queries/get-auth";
import { TickyaTable } from "@/features/tickya/components/tickya-table";
import { TickyaUpsertForm } from "@/features/tickya/components/tickya-upsert-form";
import { signInPath } from "@/paths";

const TickyasPage = async () => {
  const { user } = await getAuth();

  if (!user) {
    redirect(signInPath());
  }

  const createButton = (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create a record</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>A new record will be created</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new record.
          </DialogDescription>
        </DialogHeader>
        <TickyaUpsertForm />
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
