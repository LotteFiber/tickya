"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { tickyasPath } from "@/paths";

export const deleteTickya = async (formData: FormData) => {
  const id = formData.get("id") as string;

  await prisma.tickya.delete({
    where: { id },
  });

  revalidatePath(tickyasPath());
};
