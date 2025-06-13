import { initialTickyas } from "@/data";
import { tickyaPath } from "@/paths";
import Link from "next/link";

const TickyasPage = () => {
  return (
    <div>
      {initialTickyas.map((tickya) => (
        <div key={tickya.id}>
          <h2 className="text-lg">{tickya.name}</h2>
          <Link href={tickyaPath(tickya.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TickyasPage;
