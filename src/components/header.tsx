import { cloneElement } from "react";
import Link from "next/link";
import { LucidePill } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { homePath, signInPath, signUpPath, tickyasPath } from "@/paths";

const Header = () => {
  const navItems = (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Sign In
      </Link>
    </>
  );
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 backgdrop-blur w-ful fixed top-0 right-0 left-0 z-20 flex justify-between gap-x-4 border-b px-5 py-2.5">
      <div className="flex gap-x-4">
        <div className="flex items-center justify-center gap-x-2">
          {cloneElement(<LucidePill />, {
            className: "w-5 h-5 text-primary",
          })}
          <h1 className="text-primary text-xl font-bold tracking-wide">
            Tickya
          </h1>
        </div>
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
            Record
          </Link>
        </div>
      </div>
      <div className="flex gap-x-4">{navItems}</div>
    </nav>
  );
};

export { Header };
