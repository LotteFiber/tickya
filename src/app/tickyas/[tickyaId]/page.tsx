import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";

import { initialTickyas } from "@/data";
import { tickyasPath } from "@/paths";

type TickyaPageProps = {
  params: Promise<{ tickyaId: string }>;
};

const TickyaPage = async ({ params }: TickyaPageProps) => {
  const { tickyaId } = await params;
  const tickya = initialTickyas.find((tickya) => tickya.id === tickyaId);

  if (!tickya) {
    return (
      <Placeholder
        label="Record not found"
        button={
          <Button asChild variant="outline">
            <Link href={tickyasPath()}>Go to tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{tickya.AN}</h2>
      <p className="text-sm">{tickya.name}</p>
    </div>
  );
};

export default TickyaPage;
