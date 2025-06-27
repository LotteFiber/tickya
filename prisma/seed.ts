import { Prisma, PrismaClient } from "@/generated/prisma";

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
  {
    id: "4",
    status: "DONE" as const,
    HN: "000120123",
    patientName: "Kamonchanok Siriporn",
    AN: "000114004",
    department: "OPD" as const,
    description:
      "Dispensed: Cetirizine 10mg x 10 tablets. Patient advised on drowsiness. Follow-up in 1 week.",
  },
  {
    id: "5",
    status: "OPEN" as const,
    HN: "000120134",
    patientName: "Somchai Maneerat",
    AN: "000114005",
    department: "IPD" as const,
    description:
      "Prescription received. Metformin 500mg x 60 tablets. Awaiting pharmacist review.",
  },
  {
    id: "6",
    status: "IN_PROGRESS" as const,
    HN: "000120158",
    patientName: "Jiraporn Limsakul",
    AN: "000114006",
    department: "OneStop" as const,
    description:
      "Dispensing Losartan 50mg x 30 tablets. Patient allergies checked. Barcode scanned successfully.",
  },
  {
    id: "7",
    status: "DONE" as const,
    HN: "000120199",
    patientName: "Robert Smith",
    AN: "000114007",
    department: "OPD" as const,
    description:
      "Dispensed: Loratadine 10mg x 10 tablets. Instructions given to take once daily after meals.",
  },
  {
    id: "8",
    status: "OPEN" as const,
    HN: "000120201",
    patientName: "Suchada Vongchai",
    AN: "000114008",
    department: "IPD" as const,
    description:
      "Prescription not yet printed. Includes Vitamin B-complex. Needs confirmation by physician.",
  },
  {
    id: "9",
    status: "IN_PROGRESS" as const,
    HN: "000120215",
    patientName: "Nattapong Charoensuk",
    AN: "000114009",
    department: "OneStop" as const,
    description:
      "Verifying drug interactions: Simvastatin 20mg x 30 tablets. Counseling required before release.",
  },
  {
    id: "10",
    status: "DONE" as const,
    HN: "000120225",
    patientName: "Emily Davis",
    AN: "000114010",
    department: "OPD" as const,
    description:
      "Completed dispensing: Omeprazole 20mg x 14 capsules. Patient educated on empty stomach intake.",
  },
];

export async function main() {
  for (const t of tickyaData) {
    await prisma.tickya.create({ data: t });
  }
}

main();
