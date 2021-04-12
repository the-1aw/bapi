import { Router } from 'express';
import { getHealth } from './health.controller';

const healtRouter = Router();

healtRouter.get('/healthz', getHealth);

export default healtRouter;
