import { prisma } from "@/lib/prisma";
import { SearchParams } from "../search-params";

export const getTickyas = async (searchParams: SearchParams) => {
  console.log(searchParams);
  return await prisma.tickya.findMany({
    where: {
      HN: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
