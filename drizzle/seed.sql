-- Sample Data Seed SQL for shops table
-- Database: PostgreSQL (osm)

INSERT INTO "shops" (
  "id", "user_id", "shop_name", "initial", "email", "phone",
  "shop_logo", "shop_cover", "code", "latitude", "longitude",
  "shop_type", "open_status", "created_at", "updated_at"
) VALUES
(1, 12823, 'The Best Grocery Store', 'test', 'nn@gmail.com', '099 878 767', '2026-07-29_afc3748a-bbba-4137-ae89-92e98b90a61f.webp', '2026-07-29_ef3920e7-2ac0-4eb7-8a4e-610efa08a0ff.webp', 'MCP01285-001', 11.56587361, 104.89519365, 'Artificial Plant, Fresh Flowers', 'Open', '29-07-2026', '27-08-2026'),
(2, 12824, 'Central Riverside Cafe & Bakery', 'CRCB', 'riverside@gmail.com', '012 345 678', '2026-07-29_riverside_logo.webp', '2026-07-29_riverside_cover.webp', 'MCP01285-002', 11.572412, 104.926189, 'Cafe, Bakery', 'Open', '30-07-2026', '28-08-2026'),
(3, 12825, 'Angkor Organic Goods', 'AOG', 'angkor.goods@gmail.com', '063 987 654', '2026-08-01_angkor_logo.webp', '2026-08-01_angkor_cover.webp', 'MCP01285-003', 13.3633, 103.8564, 'Organic Grocery, Souvenirs', 'Open', '01-08-2026', '20-08-2026'),
(4, 12826, 'Sihanoukville Beachside Mart', 'SBM', 'beachside@gmail.com', '034 555 123', '2026-08-05_beach_logo.webp', '2026-08-05_beach_cover.webp', 'MCP01285-004', 10.6275, 103.5221, 'Convenience Store', 'Open', '05-08-2026', '15-08-2026'),
(5, 16891, 'Riverside Khmer Silk & Souvenirs #966', 'RKS', 'rks.966@example.com', '089 227 122', 'logo_966.webp', 'cover_966.webp', 'RND-1378-1', 11.589853, 104.919461, 'Handicrafts, Souvenirs', 'Open', '08-09-2026', '08-09-2026'),
(6, 15898, 'Toul Tom Poung Craft Beer Hub #490', 'TTC', 'ttc.490@example.com', '077 696 218', 'logo_490.webp', 'cover_490.webp', 'RND-1379-2', 11.576532, 104.910806, 'Craft Beer, Gastro Pub', 'Open', '08-09-2026', '08-09-2026'),
(7, 15435, 'Brown Coffee Roastery BKK1 #886', 'BCR', 'bcr.886@example.com', '077 828 170', 'logo_886.webp', 'cover_886.webp', 'RND-1379-3', 11.584559, 104.940573, 'Cafe, Specialty Coffee', 'Open', '08-09-2026', '08-09-2026'),
(8, 14324, 'Lucky Supermarket Sihanouk Blvd #106', 'LSM', 'lsm.106@example.com', '077 335 994', 'logo_106.webp', 'cover_106.webp', 'RND-1379-4', 11.556183, 104.899032, 'Supermarket, Groceries', 'Closed', '08-09-2026', '08-09-2026'),
(9, 17204, 'Riverside Khmer Silk & Souvenirs #849', 'RKS', 'rks.849@example.com', '098 707 605', 'logo_849.webp', 'cover_849.webp', 'RND-1379-5', 11.559322, 104.938896, 'Handicrafts, Souvenirs', 'Open', '08-09-2026', '08-09-2026'),
(10, 15049, 'Central Market Gold & Gems Studio #323', 'CMG', 'cmg.323@example.com', '092 698 434', 'logo_323.webp', 'cover_323.webp', 'RND-1379-6', 11.556471, 104.919187, 'Jewelry, Gemstones', 'Open', '08-09-2026', '08-09-2026'),
(11, 16473, 'Sen Sok Fitness Nutrition Store #853', 'SSF', 'ssf.853@example.com', '092 656 938', 'logo_853.webp', 'cover_853.webp', 'RND-1379-7', 11.575408, 104.932079, 'Health Supplements, Vitamins', 'Open', '08-09-2026', '08-09-2026'),
(12, 15963, 'Eden Garden Italian Trattoria #418', 'EGI', 'egi.418@example.com', '092 219 987', 'logo_418.webp', 'cover_418.webp', 'RND-1379-8', 11.591243, 104.937567, 'Restaurant, Italian Cuisine', 'Open', '08-09-2026', '08-09-2026'),
(13, 14400, 'Lucky Supermarket Sihanouk Blvd #849', 'LSM', 'lsm.849@example.com', '077 443 214', 'logo_849.webp', 'cover_849.webp', 'RND-1379-9', 11.576935, 104.892918, 'Supermarket, Groceries', 'Open', '08-09-2026', '08-09-2026'),
(14, 16867, 'Phnom Penh Green Plant Nursery #164', 'PPG', 'ppg.164@example.com', '010 478 215', 'logo_164.webp', 'cover_164.webp', 'RND-1379-10', 11.544047, 104.905700, 'Plants, Garden Supplies', 'Open', '08-09-2026', '08-09-2026'),
(15, 15997, 'Riverside Khmer Silk & Souvenirs #844', 'RKS', 'rks.844@example.com', '089 562 882', 'logo_844.webp', 'cover_844.webp', 'RND-1379-11', 11.579999, 104.899530, 'Handicrafts, Souvenirs', 'Open', '08-09-2026', '08-09-2026'),
(16, 16890, 'Sen Sok Fitness Nutrition Store #335', 'SSF', 'ssf.335@example.com', '098 388 518', 'logo_335.webp', 'cover_335.webp', 'RND-1379-12', 11.586654, 104.877459, 'Health Supplements, Vitamins', 'Open', '08-09-2026', '08-09-2026'),
(17, 16396, 'Toul Tom Poung Craft Beer Hub #526', 'TTC', 'ttc.526@example.com', '098 764 142', 'logo_526.webp', 'cover_526.webp', 'RND-1379-13', 11.546670, 104.915659, 'Craft Beer, Gastro Pub', 'Open', '08-09-2026', '08-09-2026'),
(18, 13565, 'Tube Coffee Tuol Kork #961', 'TCT', 'tct.961@example.com', '089 689 144', 'logo_961.webp', 'cover_961.webp', 'RND-1379-14', 11.571925, 104.888648, 'Coffee, Beverages', 'Open', '08-09-2026', '08-09-2026'),
(19, 17836, 'Boeung Keng Kang Flower Studio #231', 'BKF', 'bkf.231@example.com', '012 228 655', 'logo_231.webp', 'cover_231.webp', 'RND-1379-15', 11.558049, 104.943529, 'Fresh Flowers, Florist', 'Open', '08-09-2026', '08-09-2026'),
(20, 17066, 'Phnom Penh Green Plant Nursery #828', 'PPG', 'ppg.828@example.com', '089 400 373', 'logo_828.webp', 'cover_828.webp', 'RND-1379-16', 11.575347, 104.906618, 'Plants, Garden Supplies', 'Open', '08-09-2026', '08-09-2026'),
(21, 13324, 'Olympic Market Fabric & Tailor #158', 'OMF', 'omf.158@example.com', '010 883 528', 'logo_158.webp', 'cover_158.webp', 'RND-1379-17', 11.546505, 104.905830, 'Textiles, Tailoring', 'Open', '08-09-2026', '08-09-2026'),
(22, 14149, 'Central Market Gold & Gems Studio #676', 'CMG', 'cmg.676@example.com', '012 144 695', 'logo_676.webp', 'cover_676.webp', 'RND-1379-18', 11.538126, 104.929352, 'Jewelry, Gemstones', 'Closed', '08-09-2026', '08-09-2026'),
(23, 15006, 'Eden Garden Italian Trattoria #867', 'EGI', 'egi.867@example.com', '012 220 361', 'logo_867.webp', 'cover_867.webp', 'RND-1379-19', 11.546536, 104.914840, 'Restaurant, Italian Cuisine', 'Open', '08-09-2026', '08-09-2026'),
(24, 15728, 'Boeung Keng Kang Flower Studio #185', 'BKF', 'bkf.185@example.com', '092 579 739', 'logo_185.webp', 'cover_185.webp', 'RND-1379-20', 11.550873, 104.919066, 'Fresh Flowers, Florist', 'Closed', '08-09-2026', '08-09-2026')
ON CONFLICT (id) DO UPDATE SET
  "shop_name" = EXCLUDED."shop_name",
  "latitude" = EXCLUDED."latitude",
  "longitude" = EXCLUDED."longitude",
  "shop_type" = EXCLUDED."shop_type",
  "open_status" = EXCLUDED."open_status";

-- Adjust serial sequence so auto-increment works smoothly
SELECT setval(pg_get_serial_sequence('shops', 'id'), coalesce(max(id), 1)) FROM "shops";
