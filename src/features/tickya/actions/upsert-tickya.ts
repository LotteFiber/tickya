"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { tickyasPath } from "@/paths";
import { Department, TickyaStatus } from "@/prisma/generated/client";

type TickyaForm = {
  status: TickyaStatus;
  HN: string;
  patientName: string;
  AN: string;
  department: Department;
  description: string;
};

export const upsertTickya = async (
  id: string | undefined,
  formData: FormData
) => {
  const data: TickyaForm = {
    status: formData.get("status") as TickyaStatus,
    HN: String(formData.get("HN") || "").trim(),
    patientName: String(formData.get("patientName") || "").trim(),
    AN: String(formData.get("AN") || "").trim(),
    department: formData.get("department") as Department,
    description: String(formData.get("description") || "").trim(),
  };

  await prisma.tickya.upsert({
    where: {
      id: id || "",
    },
    update: data,
    create: data,
  });

  revalidatePath(tickyasPath());
};
