export type TickyaStatus = "DONE" | "OPEN" | "IN_PROGRESS";

export type Tickya = {
  id: string;
  status: TickyaStatus;
  HN: string;
  patientName: string;
  AN: string;
  department: string;
  description: string;
};
