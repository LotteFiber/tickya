"use client";

import { useTransition } from "react";
import { LucideLoaderCircle } from "lucide-react";
import { Button } from "../ui/button";

export const SubmitButton = ({ label }: { label: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="submit"
      onClick={(e) => {
        const form = e.currentTarget.form;
        if (form) {
          e.preventDefault();
          startTransition(() => {
            form.requestSubmit();
          });
        }
      }}
      disabled={isPending}
    >
      {isPending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};
