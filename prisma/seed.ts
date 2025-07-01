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
  {
    id: "11",
    status: "OPEN" as const,
    HN: "000120226",
    patientName: "Chatchai Yodkaew",
    AN: "000114011",
    department: "IPD" as const,
    description:
      "Prescription received. Enalapril 5mg x 30 tablets. Pending pharmacist approval.",
  },
  {
    id: "12",
    status: "IN_PROGRESS" as const,
    HN: "000120227",
    patientName: "Alice Johnson",
    AN: "000114012",
    department: "OPD" as const,
    description:
      "Dispensing Amlodipine 5mg x 28 tablets. Patient identity verified.",
  },
  {
    id: "13",
    status: "DONE" as const,
    HN: "000120228",
    patientName: "Somsak Boonyang",
    AN: "000114013",
    department: "OneStop" as const,
    description:
      "Dispensed: Atorvastatin 10mg x 30 tablets. Counseling provided.",
  },
  {
    id: "14",
    status: "OPEN" as const,
    HN: "000120229",
    patientName: "Pimchanok Srisai",
    AN: "000114014",
    department: "IPD" as const,
    description: "Prescription pending print. Includes Aspirin 81mg.",
  },
  {
    id: "15",
    status: "IN_PROGRESS" as const,
    HN: "000120230",
    patientName: "David Lee",
    AN: "000114015",
    department: "OPD" as const,
    description:
      "Labeling Metformin 500mg x 60 tablets. Barcode check in progress.",
  },
  {
    id: "16",
    status: "DONE" as const,
    HN: "000120231",
    patientName: "Nattaya Prasit",
    AN: "000114016",
    department: "OneStop" as const,
    description:
      "Dispensed: Lisinopril 10mg x 30 tablets. Advised monitoring blood pressure.",
  },
  {
    id: "17",
    status: "OPEN" as const,
    HN: "000120232",
    patientName: "Suda Kumdee",
    AN: "000114017",
    department: "OPD" as const,
    description:
      "Prescription for Levothyroxine 50mcg x 30 tablets. Awaiting review.",
  },
  {
    id: "18",
    status: "IN_PROGRESS" as const,
    HN: "000120233",
    patientName: "Michael Brown",
    AN: "000114018",
    department: "IPD" as const,
    description:
      "Dispensing Omeprazole 20mg x 14 capsules. Checking interactions.",
  },
  {
    id: "19",
    status: "DONE" as const,
    HN: "000120234",
    patientName: "Thanakorn Jitprasert",
    AN: "000114019",
    department: "OPD" as const,
    description:
      "Dispensed: Metoprolol 50mg x 30 tablets. Advised on pulse monitoring.",
  },
  {
    id: "20",
    status: "OPEN" as const,
    HN: "000120235",
    patientName: "Sarah Wilson",
    AN: "000114020",
    department: "OneStop" as const,
    description:
      "Prescription received. Needs verification for Simvastatin 20mg.",
  },
  {
    id: "21",
    status: "IN_PROGRESS" as const,
    HN: "000120236",
    patientName: "Jirawat Manee",
    AN: "000114021",
    department: "IPD" as const,
    description:
      "Dispensing Furosemide 40mg x 20 tablets. Labeling in progress.",
  },
  {
    id: "22",
    status: "DONE" as const,
    HN: "000120237",
    patientName: "Emily Clark",
    AN: "000114022",
    department: "OPD" as const,
    description:
      "Dispensed: Clopidogrel 75mg x 30 tablets. Counseling completed.",
  },
  {
    id: "23",
    status: "OPEN" as const,
    HN: "000120238",
    patientName: "Somchai Kerdsin",
    AN: "000114023",
    department: "OneStop" as const,
    description:
      "Prescription for Allopurinol 100mg x 30 tablets pending review.",
  },
  {
    id: "24",
    status: "IN_PROGRESS" as const,
    HN: "000120239",
    patientName: "Natthaphon Rungroj",
    AN: "000114024",
    department: "IPD" as const,
    description:
      "Currently preparing insulin vials. Dose verification in process.",
  },
  {
    id: "25",
    status: "DONE" as const,
    HN: "000120240",
    patientName: "Jessica Adams",
    AN: "000114025",
    department: "OPD" as const,
    description:
      "Dispensed: Vitamin D3 1000IU x 30 capsules. Patient instructed on daily use.",
  },
];

export async function main() {
  for (const t of tickyaData) {
    await prisma.tickya.create({ data: t });
  }
}

main();
