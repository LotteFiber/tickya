import clsx from "clsx";
import Link from "next/link";

import { initialTickyas } from "@/data";
import { tickyaPath } from "@/paths";

const TICKYA_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TickyasPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickya Page</h2>
        <p className="text-muted-foreground text-sm">
          All your tickya at one place
        </p>
      </div>

      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickyas.map((tickya) => (
          <div
            key={tickya.id}
            className="w-full max-w-[420px] rounded border border-slate-400 p-4"
          >
            <div>{TICKYA_ICONS[tickya.status]}</div>
            <h3
              className={clsx("truncate text-lg font-semibold", {
                "line-through": tickya.status === "DONE",
              })}
            >
              {tickya.name}
            </h3>
            <Link href={tickyaPath(tickya.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickyasPage;
