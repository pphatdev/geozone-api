import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import * as dotenv from 'dotenv';
import shopRoutes from './routes/shopRoutes';

dotenv.config();

const app = new Hono();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middlewares
app.use('*', cors());

// Serve static interactive map test UI
app.use('/*', serveStatic({ root: './public' }));

// Health Check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Config Endpoint (Exposes API Keys for frontend testing)
app.get('/api/config', (c) => {
  const cartoKey = process.env.CARTO_API_KEY || process.env.OSM_API_KEY || '';
  return c.json({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    osmApiKey: cartoKey,
    cartoApiKey: cartoKey,
  });
});

// Mount API Routes
app.route('/api/shops', shopRoutes);

// 404 Handler
app.notFound((c) => {
  return c.json(
    {
      status: 404,
      message: 'Endpoint not found',
    },
    404
  );
});

// Global Error Handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json(
    {
      status: 500,
      message: 'Internal server error',
    },
    500
  );
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  serve(
    {
      fetch: app.fetch,
      port: PORT,
      hostname: HOST,
    },
    (info) => {
      console.log(
        `Hono server running on http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${info.port} (bound to ${HOST}:${info.port})`
      );
      console.log(`Viewport endpoint: http://localhost:${info.port}/api/shops/viewport`);
    }
  );
}

export default app;
