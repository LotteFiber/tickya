import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { createTickya } from "../actions/create-tickya";

const TickyaCreateForm = () => {
  const StatusRadioGroup = () => (
    <>
      <Label htmlFor="status">Status</Label>
      <RadioGroup
        defaultValue="OPEN"
        name="status"
        id="status"
        className="flex flex-col gap-2"
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
        defaultValue="OPD"
        name="department"
        id="department"
        className="flex flex-col gap-2"
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
    <form action={createTickya} className="mt-2 flex flex-col gap-y-2">
      <StatusRadioGroup />

      <Label htmlFor="HN">HN</Label>
      <Input id="HN" name="HN" type="text" required />

      <Label htmlFor="patientName">Patient Name</Label>
      <Input id="patientName" name="patientName" type="text" required />

      <Label htmlFor="AN">AN</Label>
      <Input id="AN" name="AN" type="text" />

      <DepartmentRadioGroup />

      <Label htmlFor="description">Description</Label>
      <Textarea id="description" name="description" />

      <Button type="submit" className="mt-2">
        Create
      </Button>
    </form>
  );
};

export { TickyaCreateForm };
