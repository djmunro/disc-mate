import { db } from "@/lib/db";
import { pets } from "@/lib/db/schema";

export const getPets = async () => {
  const result = await db.select().from(pets);
  return result;
};
