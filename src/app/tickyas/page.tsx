import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Heading } from "@/components/heading";
import { SearchInput } from "@/components/search-input";
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
import { SearchParams } from "@/features/tickya/search-params";
import { signInPath } from "@/paths";

type TickyasPageProps = {
  searchParams: Promise<SearchParams>;
};

const TickyasPage = async ({ searchParams }: TickyasPageProps) => {
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
      <div className="flex w-full justify-start">
        <div className="w-full max-w-[420px]">
          <SearchInput placeholder="Search HN ..." />
        </div>
      </div>

      <Suspense fallback={<Spinner />}>
        <TickyaTable searchParams={await searchParams} />
      </Suspense>
    </div>
  );
};

export default TickyasPage;
