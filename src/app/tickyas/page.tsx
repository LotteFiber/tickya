import { Heading } from "@/components/heading";

import { TickyaTable } from "@/features/tickya/components/tickya-table";

const TickyasPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Records Page" />
      
      <TickyaTable />
    </div>
  );
};

export default TickyasPage;
