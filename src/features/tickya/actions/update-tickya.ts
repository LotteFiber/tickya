"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { tickyasPath } from "@/paths";

export const updateTickya = async (id: string, formData: FormData) => {
  const data = {
    status: formData.get("status"),
    HN: formData.get("HN"),
    patientName: formData.get("patientName"),
    AN: formData.get("AN"),
    department: formData.get("department"),
    description: formData.get("description"),
  };

  await prisma.tickya.update({
    where: {
      id,
    },
    data: {
      status: data.status,
      HN: data.HN,
      patientName: data.patientName,
      AN: data.AN,
      department: data.department,
      description: data.description,
    },
  });

  revalidatePath(tickyasPath());
};
