import { Context } from 'hono';
import { and, gte, lte, or } from 'drizzle-orm';
import { db } from '../db';
import { shops } from '../db/schema';

export const getShopsInViewport = async (c: Context) => {
    try {
        const swLat = c.req.query('swLat');
        const swLng = c.req.query('swLng');
        const neLat = c.req.query('neLat');
        const neLng = c.req.query('neLng');

        if (!swLat || !swLng || !neLat || !neLng) {
            return c.json(
                {
                    status: 400,
                    message: "Missing query parameters. 'swLat', 'swLng', 'neLat', and 'neLng' are required.",
                },
                400
            );
        }

        const southWestLat = parseFloat(swLat);
        const southWestLng = parseFloat(swLng);
        const northEastLat = parseFloat(neLat);
        const northEastLng = parseFloat(neLng);

        if (
            isNaN(southWestLat) ||
            isNaN(southWestLng) ||
            isNaN(northEastLat) ||
            isNaN(northEastLng)
        ) {
            return c.json(
                {
                    status: 400,
                    message: "Invalid query parameters. 'swLat', 'swLng', 'neLat', and 'neLng' must be valid numbers.",
                },
                400
            );
        }

        // Latitude condition: swLat <= latitude <= neLat
        const minLat = Math.min(southWestLat, northEastLat);
        const maxLat = Math.max(southWestLat, northEastLat);
        const latCondition = and(gte(shops.latitude, minLat), lte(shops.latitude, maxLat));

        // Longitude condition: handle normal bounding boxes and antimeridian crossing (swLng > neLng)
        const lngCondition =
            southWestLng <= northEastLng
                ? and(gte(shops.longitude, southWestLng), lte(shops.longitude, northEastLng))
                : or(gte(shops.longitude, southWestLng), lte(shops.longitude, northEastLng));

        const shopRecords = await db
            .select()
            .from(shops)
            .where(and(latCondition, lngCondition));

        const result = shopRecords.map((shop) => ({
            id: shop.id,
            user_id: shop.userId,
            shop_name: shop.shopName,
            initial: shop.initial,
            email: shop.email,
            phone: shop.phone,
            shop_logo: shop.shopLogo,
            shop_cover: shop.shopCover,
            code: shop.code,
            latitude: shop.latitude,
            longitude: shop.longitude,
            shop_type: shop.shopType,
            open_status: shop.openStatus,
            created_at: shop.createdAt,
            updated_at: shop.updatedAt,
        }));

        return c.json({
            status: 200,
            total: result.length,
            result,
        });
    } catch (error) {
        console.error('Error fetching shops in viewport:', error);
        return c.json(
            {
                status: 500,
                message: 'Internal server error while fetching shops in viewport.',
            },
            500
        );
    }
};
