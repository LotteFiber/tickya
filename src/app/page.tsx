import { Heading } from "@/components/heading";

const HomePage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
    </div>
  );
};

export default HomePage;
