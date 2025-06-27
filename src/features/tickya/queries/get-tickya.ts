import { prisma } from "@/lib/prisma";

export const getTickya = async (id: string) => {
  return await prisma.tickya.findUnique({
    where: {
      id,
    },
  });
};
