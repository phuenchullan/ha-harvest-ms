import { boolean, doublePrecision, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { blocks } from "./blocks.schema.js";

export const plantations = pgTable("plantations", {
    id: uuid("id").primaryKey().defaultRandom(),
    fruit: text("fruit").notNull(),
    surface: doublePrecision("surface").notNull(),
    unit: text("unit").notNull(),
    variety: text("variety").notNull(),
    blockId: uuid("blockId").notNull().references(() => blocks.id),
    active: boolean('active').notNull().default(true),
    startDate: timestamp('startDate').notNull(),
    endDate: timestamp('endDate'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Plantation = typeof plantations.$inferSelect;
export type NewPlantation = typeof plantations.$inferInsert;