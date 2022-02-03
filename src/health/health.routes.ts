import { Router } from 'express';
import { getHealth, getApiError, getUnknownError } from './health.controller';
import { appConfig, EnvModes } from '../utils/config';

const healtRouter = Router();

healtRouter.get('/', getHealth);
// Do not use error health root in production to prevent error spamming
if (appConfig.env !== EnvModes.Production) {
  healtRouter.get('/api-error', getApiError);
  healtRouter.get('/rand-error', getUnknownError);
}

export default healtRouter;
