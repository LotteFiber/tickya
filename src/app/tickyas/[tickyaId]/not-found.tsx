import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { tickyasPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="We could not find your records"
      button={
        <Button asChild variant="outline">
          <Link href={tickyasPath()}>Go to Records page</Link>
        </Button>
      }
    />
  );
}
