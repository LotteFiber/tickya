import Link from "next/link";

import { Heading } from "@/components/heading";

import { tickyasPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />

      <div className="flex flex-1 flex-col items-center">
        <Link href={tickyasPath()} className="underline">
          Go to Tickya
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
