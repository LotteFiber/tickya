import { Prisma, PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

const tickyaData: Prisma.TickyaCreateInput[] = [
  {
    id: "1",
    status: "DONE" as const,
    HN: "000120045",
    patientName: "Michael Thompson",
    AN: "000114001",
    department: "IPD" as const,
    description:
      "Dispensed: Paracetamol 500mg x 10 tablets. Patient received medication at bedside. Verified by nurse before discharge.",
  },
  {
    id: "2",
    status: "OPEN" as const,
    HN: "000120089",
    patientName: "Suphansa Rattanakul",
    AN: "000114002",
    department: "OPD" as const,
    description:
      "Pending dispensing. Prescription includes Amoxicillin 500mg x 21 capsules. Waiting for pharmacist verification.",
  },
  {
    id: "3",
    status: "IN_PROGRESS" as const,
    HN: "000120065",
    patientName: "Anan Phongchai",
    AN: "000114003",
    department: "OneStop" as const,
    description:
      "Currently dispensing: Ibuprofen 200mg x 15 tablets. Patient identity verified. Labeling in progress.",
  },
];

export async function main() {
  for (const t of tickyaData) {
    await prisma.tickya.create({ data: t });
  }
}

main();
