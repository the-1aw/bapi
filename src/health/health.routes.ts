import { Router } from 'express';
import { getHealth, getApiError, getUnknownError } from './health.controller';
import { appConfig, EnvModesEnum } from '../config';

const healtRouter = Router();

healtRouter.get('/', getHealth);
// Do not use error health root in production to prevent error spamming
if (appConfig.env !== EnvModesEnum.PRODUCTION) {
  healtRouter.get('/api-error', getApiError);
  healtRouter.get('/rand-error', getUnknownError);
}

export default healtRouter;
