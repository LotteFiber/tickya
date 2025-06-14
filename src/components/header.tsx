import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { homePath, tickyasPath } from "@/paths";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 backgdrop-blur w-ful fixed top-0 right-0 left-0 z-20 flex gap-x-4 border-b px-5 py-2.5">
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "outline" })}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          href={tickyasPath()}
          className={buttonVariants({ variant: "outline" })}
        >
          Tickyas
        </Link>
      </div>
    </nav>
  );
};

export { Header };
