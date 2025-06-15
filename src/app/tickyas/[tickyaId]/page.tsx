import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTickya } from "@/features/tickya/queries/get-tickya";
import NotFound from "./not-found";

type TickyaPageProps = {
  params: Promise<{ tickyaId: string }>;
};

const TickyaPage = async ({ params }: TickyaPageProps) => {
  const { tickyaId } = await params;
  const tickya = await getTickya(tickyaId);

  if (!tickya) {
    return <NotFound />;
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
