import { cloneElement } from "react";
import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  button?: React.ReactNode;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = null,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
};

export { Placeholder };
