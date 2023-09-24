import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const pets = pgTable("pets", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  name: text("name"),
  owner: text("owner"),
});
