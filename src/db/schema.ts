import { pgTable, serial, integer, varchar, text, doublePrecision, index } from 'drizzle-orm/pg-core';

export const shops = pgTable(
    'shops',
    {
        id: serial('id').primaryKey(),
        userId: integer('user_id').notNull(),
        shopName: varchar('shop_name', { length: 255 }).notNull(),
        initial: varchar('initial', { length: 50 }),
        email: varchar('email', { length: 255 }),
        phone: varchar('phone', { length: 50 }),
        shopLogo: varchar('shop_logo', { length: 255 }),
        shopCover: varchar('shop_cover', { length: 255 }),
        code: varchar('code', { length: 50 }),
        latitude: doublePrecision('latitude').notNull(),
        longitude: doublePrecision('longitude').notNull(),
        shopType: text('shop_type'),
        openStatus: varchar('open_status', { length: 50 }).default('Open'),
        createdAt: varchar('created_at', { length: 20 }),
        updatedAt: varchar('updated_at', { length: 20 }),
    },
    (table) => ({
        spatialIdx: index('shops_spatial_idx').on(table.latitude, table.longitude),
    })
);

export type Shop = typeof shops.$inferSelect;
export type NewShop = typeof shops.$inferInsert;
