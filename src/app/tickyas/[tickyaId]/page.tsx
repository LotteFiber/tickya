import { initialTickyas } from "@/data";

type TickyaPageProps = {
  params: {
    tickyaId: string;
  };
};


const TickyaPage = async ({ params }: TickyaPageProps) => {
  const { tickyaId } = params;
  const tickya = initialTickyas.find((tickya) => tickya.id === tickyaId);

  if (!tickya) {
    return <div>Tickya not found</div>;
  }

  return (
    <div>
      <h2 className="text-lg">{tickya.AN}</h2>
      <p className="text-sm">{tickya.name}</p>
    </div>
  );
};

export default TickyaPage;
