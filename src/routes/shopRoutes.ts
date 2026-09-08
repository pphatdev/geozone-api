import { Hono } from 'hono';
import { getShopsInViewport } from '../controllers/shopController';

const router = new Hono();

router.get('/viewport', getShopsInViewport);

export default router;
