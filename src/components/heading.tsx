import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
  button?: React.ReactElement;
};
const Heading = ({ title, description, button }: HeadingProps) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foregounrd text-sm">{description}</p>
          )}
        </div>
        {button}
      </div>

      <Separator />
    </>
  );
};

export { Heading };
