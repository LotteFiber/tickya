"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { tickyasPath } from "@/paths";

const upsertTickyaSchema = z.object({
  status: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(["OPEN", "IN_PROGRESS", "DONE"], {
      errorMap: () => ({ message: "Please select a status." }),
    })
  ),
  HN: z.string().refine((val) => /^\d{9}$/.test(val), {
    message: "The HN number must have 9 digits.",
  }),
  patientName: z.string().min(1).max(256),
  AN: z.string().refine((val) => /^\d{9}$/.test(val), {
    message: "The AN number must have 9 digits.",
  }),
  department: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(["OPD", "IPD", "OneStop"], {
      errorMap: () => ({ message: "Please select a department." }),
    })
  ),
  description: z.string().optional(),
});

export const upsertTickya = async (
  id: string | undefined,
  _actionState: ActionState,
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
      return toActionState("SUCCESS", "Record has edited");
    }

    return toActionState("SUCCESS", "Record created");
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
};
