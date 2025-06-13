import { tickyasPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>
      <Link href={tickyasPath()} className="underline">
        Go to Tickyas
      </Link>
    </div>
  );
};

export default HomePage;
