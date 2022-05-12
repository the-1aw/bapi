import { Router } from 'express';
import { getHealth, getApiError, getUnknownError } from './health.controller';
import { appConfig } from '../config';
import { EnvModesEnum } from '../types';

const healtRouter = Router();

healtRouter.get('/', getHealth);
// Do not use error health root in production to prevent error spamming
if (appConfig.env !== EnvModesEnum.PRODUCTION) {
  healtRouter.get('/api-error', getApiError);
  healtRouter.get('/rand-error', getUnknownError);
}

export default healtRouter;
