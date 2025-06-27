"use client";

import { cloneElement } from "react";
import clsx from "clsx";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  pending?: boolean;
};

const SubmitButton = ({
  label,
  icon,
  variant = "default",
  size = "default",
  pending: pendingProp,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  const isPending = pendingProp ?? pending;

  return (
    <Button disabled={isPending} type="submit" variant={variant} size={size}>
      {isPending && (
        <LucideLoaderCircle
          className={clsx("h-4 w-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}
      {isPending ? null : icon ? (
        <span
          className={clsx({
            "ml-2": !!label,
          })}
        >
          {cloneElement(icon)}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
