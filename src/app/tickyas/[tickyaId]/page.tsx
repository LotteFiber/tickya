import Link from "next/link";

import { Heading } from "@/components/heading";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Detail Page" />

      <Card>
        <CardHeader>
          <CardTitle>{`HN: ${tickya.HN}`}</CardTitle>
          <CardDescription>{tickya.status}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{tickya.patientName}</p>
        </CardContent>
        <CardFooter>
          <p>{tickya.description}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TickyaPage;
