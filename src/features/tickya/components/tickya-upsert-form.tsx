"use client";

import { useActionState } from "react";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { upsertTickya } from "../actions/upsert-tickya";
import { Tickya } from "../type";

type TickyaUpsertFormProps = {
  tickya?: Tickya;
};

const TickyaUpsertForm = ({ tickya }: TickyaUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTickya.bind(null, tickya?.id),
    EMPTY_ACTION_STATE
  );

  const StatusRadioGroup = () => (
    <>
      <Label htmlFor="status">Status</Label>
      <RadioGroup
        name="status"
        id="status"
        className="flex flex-col gap-2"
        defaultValue={
          (actionState.payload?.get("status") as string) ?? tickya?.status
        }
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
      <FieldError actionState={actionState} name="status" />
    </>
  );

  const DepartmentRadioGroup = () => (
    <>
      <Label htmlFor="department">Department</Label>
      <RadioGroup
        name="department"
        id="department"
        className="flex flex-col gap-2"
        defaultValue={
          (actionState.payload?.get("department") as string) ??
          tickya?.department
        }
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
      <FieldError actionState={actionState} name="department" />
    </>
  );

  return (
    <Form action={action} actionState={actionState}>
      <StatusRadioGroup />

      <Label htmlFor="HN">HN</Label>
      <Input
        id="HN"
        name="HN"
        type="text"
        defaultValue={(actionState.payload?.get("HN") as string) ?? tickya?.HN}
      />
      <FieldError actionState={actionState} name="HN" />

      <Label htmlFor="patientName">Patient Name</Label>
      <Input
        id="patientName"
        name="patientName"
        type="text"
        defaultValue={
          (actionState.payload?.get("patientName") as string) ??
          tickya?.patientName
        }
      />
      <FieldError actionState={actionState} name="patientName" />

      <Label htmlFor="AN">AN</Label>
      <Input
        id="AN"
        name="AN"
        type="text"
        defaultValue={(actionState.payload?.get("AN") as string) ?? tickya?.AN}
      />
      <FieldError actionState={actionState} name="AN" />

      <DepartmentRadioGroup />

      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={
          (actionState.payload?.get("description") as string) ??
          tickya?.description
        }
      />
      <FieldError actionState={actionState} name="description" />

      <SubmitButton label={tickya ? "Edit" : "Create"} />
    </Form>
  );
};

export { TickyaUpsertForm };
