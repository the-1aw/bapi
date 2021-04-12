import { Router } from 'express';

import healthRouter from './health/health.routes';

const router = Router();

router.use(healthRouter);

export default router;
