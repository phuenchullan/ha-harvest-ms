import { boolean, doublePrecision, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const lands = pgTable('lands',{
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    surface: doublePrecision('surface').notNull(), 
    unit: text('unit').notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Land = typeof lands.$inferSelect;
export type NewLand = typeof lands.$inferInsert;