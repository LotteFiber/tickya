import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

      <Separator />

      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickyas.map((tickya) => (
          <Card key={tickya.id} className="w-full max-w-[420px] p-4">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKYA_ICONS[tickya.status]}</span>
                <span className="truncate">{tickya.AN}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {tickya.name}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={tickyaPath(tickya.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TickyasPage;
