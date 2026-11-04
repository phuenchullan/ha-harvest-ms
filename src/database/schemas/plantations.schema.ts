import { boolean, doublePrecision, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { blocks } from "./blocks.schema.js";

export const plantations = pgTable("plantations", {
    id: uuid("id").primaryKey().defaultRandom(),
    fruit: text("fruit").notNull(),
    surface: doublePrecision("surface").notNull(),
    unit: text("unit").notNull(),
    variety: text("variety").notNull(),
    blockId: uuid("blockId").notNull().references(() => blocks.id),
    phonePlantationId: integer('phonePlantationId'),
    phoneId: text('phoneId'),
    isLoaded: boolean('isLoaded').notNull().default(false),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Plantation = typeof plantations.$inferSelect;
export type NewPlantation = typeof plantations.$inferInsert;