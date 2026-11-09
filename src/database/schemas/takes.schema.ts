import {
  boolean,
  doublePrecision,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { harvesters } from './harvesters.schema.js';
import { plantations } from './plantations.schema.js';
import { trays } from './trays.schema.js';

export const takes = pgTable('takes', {
  id: uuid('id').primaryKey().defaultRandom(),
  trayId: uuid('trayId')
    .notNull()
    .references(() => trays.id),
  plantationId: uuid('plantationId').references(() => plantations.id),
  harvesterId: uuid('harvesterId')
    .notNull()
    .references(() => harvesters.id),
  userId: uuid('userId').default('1b5178b7-9dc5-42fe-8a6d-d6cd1eb186c2').notNull(),
  numberOfTray: integer('numberOfTray').notNull(),
  brute: doublePrecision('brute').notNull(),
  neto: doublePrecision('neto').notNull(),
  price: doublePrecision('price').notNull(),
  phoneTakeId: integer('phoneTakeId'),
  phoneId: text('phoneId'),
  isLoaded: boolean('isLoaded').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export type Take = typeof takes.$inferSelect;
export type NewTake = typeof takes.$inferInsert;
