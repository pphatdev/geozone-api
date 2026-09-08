<p align="center">
  <img src="./assets/cover.jpg" alt="GeoZone API - High Performance Geospatial Viewport Engine" width="100%" style="border-radius: 8px;" />
</p>

<h1 align="center">GeoZone API 🌍📍</h1>

<p align="center">
  <strong>High-performance geospatial REST API for dynamic store and merchant filtering by map viewport bounding boxes, powered by Hono.js, Drizzle ORM, and PostgreSQL.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Hono.js-E36002?style=for-the-badge&logo=hono&logoColor=white" alt="Hono.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet" />
</p>

---

## ✨ Features

- **Ultra-Fast with Hono.js**: Minimal overhead, high-throughput web-standard routing engine.
- **Viewport Bounding-Box Filtering**: Seamlessly retrieve locations visible inside the active map screen (`swLat`, `swLng`, `neLat`, `neLng`).
- **PostgreSQL Spatial Indexing**: Optimized with composite index `shops_spatial_idx (latitude, longitude)` for sub-millisecond query execution.
- **Antimeridian Crossing Support**: Seamlessly handles bounding boxes that cross the 180° meridian.
- **Zero-Cost Backend Math**: Bounding calculations run directly inside PostgreSQL — zero external API calls or third-party billing required on the backend.
- **Interactive Test Suite**: Built-in minimalist OpenStreetMap (CARTO Positron / Dark Matter / Voyager) and Google Maps test dashboard at `http://localhost:3001/`.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (TypeScript)
- **Framework:** Hono.js (`hono` + `@hono/node-server`)
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL
- **Migrations:** Drizzle Kit
- **Frontend Test UI:** Leaflet + CARTO Basemaps

---

## 📁 Project Structure

```text
.
├── assets/                   # Repository media & banners
│   └── cover.jpg             # Project cover banner
├── drizzle/                  # SQL migrations & seeds
│   ├── 0000_init_shops.sql   # Initial schema migration
│   └── seed.sql              # Standalone SQL seed script
├── public/                   # Interactive map test UI
│   └── index.html            # Clean OSM & Google Maps test dashboard
├── src/
│   ├── controllers/
│   │   └── shopController.ts # Viewport search business logic
│   ├── db/
│   │   ├── index.ts          # Database client (Postgres.js + Drizzle)
│   │   ├── migrate.ts        # Migration execution script
│   │   ├── schema.ts         # Drizzle schema definition
│   │   └── seed.ts           # Sample data seeder
│   ├── routes/
│   │   └── shopRoutes.ts     # Hono router (/api/shops)
│   └── app.ts                # Application entrypoint
├── .env                      # Local environment configuration
├── .env.example              # Template environment variables
├── drizzle.config.ts         # Drizzle Kit configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript compiler settings
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure your database:

```env
PORT=3001
HOST=0.0.0.0
DATABASE_URL=postgres://postgres:123@localhost:5432/osm
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
CARTO_API_KEY=your_carto_basemaps_api_key_here
```

### 3. Database Migration & Seeding

```bash
# Run migrations on PostgreSQL
npm run migration:run

# Seed sample stores (Phnom Penh, Siem Reap, Sihanoukville)
npm run seed
```

### 4. Start Development Server

```bash
npm run dev
```

The server starts on `http://localhost:3001` (bound to `0.0.0.0`).

---

## 📖 API Reference

### Get Shops in Viewport

Retrieves shops located within the bounding box defined by map bounds.

* **Method:** `GET`
* **Endpoint:** `/api/shops/viewport`
* **Query Parameters:**
  * `swLat` (number, required): Southwest Latitude (e.g. `11.5500`)
  * `swLng` (number, required): Southwest Longitude (e.g. `104.8800`)
  * `neLat` (number, required): Northeast Latitude (e.g. `11.5800`)
  * `neLng` (number, required): Northeast Longitude (e.g. `104.9300`)

#### Example Request

```http
GET /api/shops/viewport?swLat=11.5500&swLng=104.8800&neLat=11.5800&neLng=104.9300 HTTP/1.1
Host: localhost:3001
```

#### Example Response

```json
{
  "status": 200,
  "total": 2,
  "result": [
    {
      "id": 1,
      "user_id": 12823,
      "shop_name": "The Best Grocery Store",
      "initial": "test",
      "email": "nn@gmail.com",
      "phone": "099 878 767",
      "shop_logo": "2026-07-29_afc3748a-bbba-4137-ae89-92e98b90a61f.webp",
      "shop_cover": "2026-07-29_ef3920e7-2ac0-4eb7-8a4e-610efa08a0ff.webp",
      "code": "MCP01285-001",
      "latitude": 11.56587361,
      "longitude": 104.89519365,
      "shop_type": "Artificial Plant, Fresh Flowers",
      "open_status": "Open",
      "created_at": "29-07-2026",
      "updated_at": "27-08-2026"
    }
  ]
}
```

---

## 🗺️ Interactive Test Suite

Open your browser to:
```text
http://localhost:3001/
```
Drag or zoom the map to see real-time bounding box synchronization, live latency telemetry, and dynamic shop cards.
