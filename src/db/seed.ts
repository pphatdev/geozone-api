import { db, client } from './index';
import { shops } from './schema';

const baseShops = [
    { userId: 12823, shopName: 'The Best Grocery Store', initial: 'test', email: 'nn@gmail.com', phone: '099 878 767', shopLogo: '2026-07-29_afc3748a-bbba-4137-ae89-92e98b90a61f.webp', shopCover: '2026-07-29_ef3920e7-2ac0-4eb7-8a4e-610efa08a0ff.webp', code: 'MCP01285-001', latitude: 11.56587361, longitude: 104.89519365, shopType: 'Artificial Plant, Fresh Flowers', openStatus: 'Open', createdAt: '29-07-2026', updatedAt: '27-08-2026', },
    { userId: 12824, shopName: 'Central Riverside Cafe & Bakery', initial: 'CRCB', email: 'riverside@gmail.com', phone: '012 345 678', shopLogo: '2026-07-29_riverside_logo.webp', shopCover: '2026-07-29_riverside_cover.webp', code: 'MCP01285-002', latitude: 11.572412, longitude: 104.926189, shopType: 'Cafe, Bakery', openStatus: 'Open', createdAt: '30-07-2026', updatedAt: '28-08-2026', },
    { userId: 12825, shopName: 'Angkor Organic Goods', initial: 'AOG', email: 'angkor.goods@gmail.com', phone: '063 987 654', shopLogo: '2026-08-01_angkor_logo.webp', shopCover: '2026-08-01_angkor_cover.webp', code: 'MCP01285-003', latitude: 13.3633, longitude: 103.8564, shopType: 'Organic Grocery, Souvenirs', openStatus: 'Open', createdAt: '01-08-2026', updatedAt: '20-08-2026', },
    { userId: 12826, shopName: 'Sihanoukville Beachside Mart', initial: 'SBM', email: 'beachside@gmail.com', phone: '034 555 123', shopLogo: '2026-08-05_beach_logo.webp', shopCover: '2026-08-05_beach_cover.webp', code: 'MCP01285-004', latitude: 10.6275, longitude: 103.5221, shopType: 'Convenience Store', openStatus: 'Open', createdAt: '05-08-2026', updatedAt: '15-08-2026', },
];

const sampleShopPool = [
    { name: 'Brown Coffee Roastery BKK1', type: 'Cafe, Specialty Coffee', initial: 'BCR' },
    { name: 'Lucky Supermarket Sihanouk Blvd', type: 'Supermarket, Groceries', initial: 'LSM' },
    { name: 'Tube Coffee Tuol Kork', type: 'Coffee, Beverages', initial: 'TCT' },
    { name: 'Aeon MaxValu Express BKK3', type: 'Convenience Store, Fresh Food', initial: 'AMV' },
    { name: 'Bassac Lane Tapas & Bistro', type: 'Restaurant, Bar & Grill', initial: 'BLT' },
    { name: 'Russian Market Artisan Bakery', type: 'Bakery, Pastries', initial: 'RMB' },
    { name: 'Chip Mong 271 Mega Pharmacy', type: 'Pharmacy, Healthcare', initial: 'CMP' },
    { name: 'Vattanac Capital Luxury Boutique', type: 'Fashion, Luxury Goods', initial: 'VCL' },
    { name: 'TK Avenue Bookshop & Stationery', type: 'Books, Office Supplies', initial: 'TKB' },
    { name: 'Riverside Khmer Silk & Souvenirs', type: 'Handicrafts, Souvenirs', initial: 'RKS' },
    { name: 'Chroy Changvar Organic Farm Stand', type: 'Organic Produce, Fruit', initial: 'CCO' },
    { name: 'Toul Tom Poung Craft Beer Hub', type: 'Craft Beer, Gastro Pub', initial: 'TTC' },
    { name: 'Olympic Market Fabric & Tailor', type: 'Textiles, Tailoring', initial: 'OMF' },
    { name: 'Eden Garden Italian Trattoria', type: 'Restaurant, Italian Cuisine', initial: 'EGI' },
    { name: 'Boeung Keng Kang Flower Studio', type: 'Fresh Flowers, Florist', initial: 'BKF' },
    { name: 'Steung Meanchey Tech & Gadgets', type: 'Electronics, Mobile Phones', initial: 'SMT' },
    { name: 'Central Market Gold & Gems Studio', type: 'Jewelry, Gemstones', initial: 'CMG' },
    { name: 'Sen Sok Fitness Nutrition Store', type: 'Health Supplements, Vitamins', initial: 'SSF' },
    { name: 'Daun Penh Modern Khmer Kitchen', type: 'Restaurant, Khmer Cuisine', initial: 'DPM' },
    { name: 'Phnom Penh Green Plant Nursery', type: 'Plants, Garden Supplies', initial: 'PPG' },
];

function getRandomNumber(min: number, max: number, decimals = 6): number {
    const factor = Math.pow(10, decimals);
    return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}

function generateRandomShops(count = 20) {
    const generated = [];

    // Bounding box around central & greater Phnom Penh:
    // Lat: 11.5350 to 11.5950, Lng: 104.8750 to 104.9450
    const minLat = 11.5350;
    const maxLat = 11.5950;
    const minLng = 104.8750;
    const maxLng = 104.9450;

    for (let i = 0; i < count; i++) {
        const template = sampleShopPool[i % sampleShopPool.length];
        const shopIndex = i + 5; // Starting after base 4
        const codeNumber = String(shopIndex).padStart(3, '0');
        const userNumber = 12830 + i;
        const phoneMid = Math.floor(100 + Math.random() * 900);
        const phoneEnd = Math.floor(100 + Math.random() * 900);
        const prefix = ['012', '098', '089', '010', '077', '092'][Math.floor(Math.random() * 6)];

        generated.push({
            userId: userNumber,
            shopName: count > 20 ? `${template.name} #${i + 1}` : template.name,
            initial: template.initial,
            email: `${template.initial.toLowerCase()}.${shopIndex}@example.com`,
            phone: `${prefix} ${phoneMid} ${phoneEnd}`,
            shopLogo: `2026-09-08_logo_${codeNumber}.webp`,
            shopCover: `2026-09-08_cover_${codeNumber}.webp`,
            code: `MCP01285-${codeNumber}`,
            latitude: getRandomNumber(minLat, maxLat, 6),
            longitude: getRandomNumber(minLng, maxLng, 6),
            shopType: template.type,
            openStatus: Math.random() > 0.15 ? 'Open' : 'Closed',
            createdAt: '08-09-2026',
            updatedAt: '08-09-2026',
        });
    }

    return generated;
}

const seed = async () => {
    const countToGenerate = 20;
    console.log(`Seeding database: ${baseShops.length} base shops + ${countToGenerate} random shops...`);

    try {
        const randomShops = generateRandomShops(countToGenerate);
        const allShops = [...baseShops, ...randomShops];

        // Clean old data & insert all
        await db.delete(shops);
        await db.insert(shops).values(allShops);

        console.log(`Successfully seeded ${allShops.length} shops total!`);
        console.log(`  - 4 base shops (Phnom Penh, Siem Reap, Sihanoukville)`);
        console.log(`  - 20 realistic shops across Phnom Penh zones`);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    } finally {
        await client.end();
    }
};

seed();
