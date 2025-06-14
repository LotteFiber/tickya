import { initialTickyas } from "@/data";

import { Tickya } from "../type";

export const getTickyas = async (): Promise<Tickya[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickyas);
  });
};
