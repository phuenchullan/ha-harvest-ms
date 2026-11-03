import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const harvesters = pgTable('harvesters', {
    id: uuid('id').primaryKey().defaultRandom(),
    rut: integer('rut').unique().notNull(),
    dv: text('dv').notNull(),
    name: text('name').notNull(),
    lastname: text('lastName').notNull(),
    contrator: text('contractor'),
    phoneHarvesterId: integer('phoneHarvesterId'),
    phoneId: text('phoneId'),
    photoPath: text('photoPath'),   
    isLoaded: boolean('isLoaded').notNull().default(false),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Harvester = typeof harvesters.$inferSelect;
export type NewHarvester = typeof harvesters.$inferInsert;

