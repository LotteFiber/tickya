"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { tickyasPath } from "@/paths";

const upsertTickyaSchema = z.object({
  status: z.enum(["OPEN", "IN_PROGRESS", "DONE"]),
  HN: z.string().min(9).max(9),
  patientName: z.string().min(1).max(256),
  AN: z.string().min(9).max(9),
  department: z.enum(["OPD", "IPD", "OneStop"]),
  description: z.string().optional(),
});

export const upsertTickya = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData
) => {
  try {
    const parsed = upsertTickyaSchema.parse({
      status: formData.get("status"),
      HN: formData.get("HN"),
      patientName: formData.get("patientName"),
      AN: formData.get("AN"),
      department: formData.get("department"),
      description: formData.get("description"),
    });

    const data = {
      ...parsed,
      description: parsed.description ?? "",
    };

    await prisma.tickya.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });

    revalidatePath(tickyasPath());

    if (id) {
      return { message: "Record has edited" };
    }

    return { message: "Record created" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { message: "Something went wrong" };
  }
};
