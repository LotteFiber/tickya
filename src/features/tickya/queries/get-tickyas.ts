import prisma from "@/lib/prisma";

export const getTickyas = async () => {
  return await prisma.tickya.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
