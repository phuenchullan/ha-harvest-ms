import { boolean, doublePrecision, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { lands } from "./lands.schema.js";


export const blocks = pgTable('blocks', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    surface: doublePrecision('surface').notNull(), 
    unit: text('unit').notNull(),
    landId: uuid('landId').notNull().references(() => lands.id),
    phoneBlockId: integer('phoneBlockId'),
    phoneId: text('phoneId'),
    isLoaded: boolean('isLoaded').notNull().default(false),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Block = typeof blocks.$inferSelect;
export type NewBlock = typeof blocks.$inferInsert;