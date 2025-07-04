import { prisma } from "@/lib/prisma";
import { SearchParams } from "../search-params";

export const getTickyas = async (searchParams: SearchParams) => {
  return await prisma.tickya.findMany({
    where: {
      ...(typeof searchParams.search === "string" && {
        HN: {
          contains: searchParams.search,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      ...(searchParams.sort === undefined && { createdAt: "desc" }),
      ...(searchParams.sort === "patientName" && { patientName: "asc" }),
      ...(searchParams.sort === "department" && { department: "asc" }),
    },
  });
};
