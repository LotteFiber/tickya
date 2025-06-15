import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const tickyaData: Prisma.TickyaCreateInput[] = [
  {
    id: "1",
    status: "DONE" as const,
    HN: "000120045",
    patientName: "Michael Thompson",
    AN: "AN00014001",
    department: "IPD",
    description:
      "Dispensed: Paracetamol 500mg x 10 tablets. Patient received medication at bedside. Verified by nurse before discharge.",
  },
  {
    id: "2",
    status: "OPEN" as const,
    HN: "000120089",
    patientName: "Suphansa Rattanakul",
    AN: "AN00014002",
    department: "OPD",
    description:
      "Pending dispensing. Prescription includes Amoxicillin 500mg x 21 capsules. Waiting for pharmacist verification.",
  },
  {
    id: "3",
    status: "IN_PROGRESS" as const,
    HN: "000120065",
    patientName: "Anan Phongchai",
    AN: "AN00014003",
    department: "1Stop",
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
