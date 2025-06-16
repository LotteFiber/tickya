"use client";

import { useActionState } from "react";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { upsertTickya } from "../actions/upsert-tickya";
import { Tickya } from "../type";

type TickyaUpsertFormProps = {
  tickya?: Tickya;
};

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="mt-2">
      {pending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

const TickyaUpsertForm = ({ tickya }: TickyaUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTickya.bind(null, tickya?.id),
    {
      message: "",
    }
  );
  const StatusRadioGroup = () => (
    <>
      <Label htmlFor="status">Status</Label>
      <RadioGroup
        name="status"
        id="status"
        className="flex flex-col gap-2"
        defaultValue={tickya?.status}
      >
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="OPEN" id="status-open" />
          <Label htmlFor="status-open">OPEN</Label>
        </span>
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="IN_PROGRESS" id="status-in-progress" />
          <Label htmlFor="status-in-progress">IN PROGRESS</Label>
        </span>
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="DONE" id="status-done" />
          <Label htmlFor="status-done">DONE</Label>
        </span>
      </RadioGroup>
    </>
  );

  const DepartmentRadioGroup = () => (
    <>
      <Label htmlFor="department">Department</Label>
      <RadioGroup
        name="department"
        id="department"
        className="flex flex-col gap-2"
        defaultValue={tickya?.department}
      >
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="OPD" id="department-opd" />
          <Label htmlFor="department-opd">OPD</Label>
        </span>
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="IPD" id="department-ipd" />
          <Label htmlFor="department-ipd">IPD</Label>
        </span>
        <span className="flex items-center space-x-2">
          <RadioGroupItem value="OneStop" id="department-oneStop" />
          <Label htmlFor="department-oneStop">One Stop</Label>
        </span>
      </RadioGroup>
    </>
  );

  return (
    <form action={action} className="mt-2 flex flex-col gap-y-2">
      <StatusRadioGroup />

      <Label htmlFor="HN">HN</Label>
      <Input id="HN" name="HN" type="text" defaultValue={tickya?.HN} />

      <Label htmlFor="patientName">Patient Name</Label>
      <Input
        id="patientName"
        name="patientName"
        type="text"
        defaultValue={tickya?.patientName}
      />

      <Label htmlFor="AN">AN</Label>
      <Input id="AN" name="AN" type="text" defaultValue={tickya?.AN} />

      <DepartmentRadioGroup />

      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={tickya?.description}
      />

      <SubmitButton label={tickya ? "Edit" : "Create"} />

      {actionState.message}
    </form>
  );
};

export { TickyaUpsertForm };
