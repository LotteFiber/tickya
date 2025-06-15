import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TickyaTable } from "@/features/tickya/components/tickya-table";

const TickyasPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Records Page" />

      <Suspense fallback={<Spinner />}>
        <TickyaTable />
      </Suspense>
    </div>
  );
};

export default TickyasPage;
