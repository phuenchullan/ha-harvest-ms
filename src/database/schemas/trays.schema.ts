import { boolean, doublePrecision, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const trays = pgTable("trays", {
    id: uuid("id").primaryKey().defaultRandom(),
    tag: text("tag").notNull(),
    description: text("description").notNull(),
    weight: doublePrecision("weight").notNull(),
    weightPerTray: doublePrecision("weightPerTray").notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Tray = typeof trays.$inferSelect;
export type NewTray = typeof trays.$inferInsert;
