"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { tickyasPath } from "@/paths";

export const deleteTickya = async (id: string) => {
  await prisma.tickya.delete({
    where: { id },
  });

  revalidatePath(tickyasPath());
};
