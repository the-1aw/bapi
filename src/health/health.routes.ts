import { Router } from 'express';
import { getHealth, getApiError, getUnknownError } from './health.controller';
import { appConfig } from '../config';
import { EnvModesEnum } from '../types';
import genMiddlewareSchemaValidator from '../utils/generateValidationMiddleware';
import { healthQueryValidator } from './schema';

const healtRouter = Router();

healtRouter.get(
  '/',
  genMiddlewareSchemaValidator(healthQueryValidator, {
    type: 'query',
  }),
  getHealth,
);
// Do not use error health root in production to prevent error spamming
if (appConfig.env !== EnvModesEnum.PRODUCTION) {
  healtRouter.get('/api-error', getApiError);
  healtRouter.get('/rand-error', getUnknownError);
}

export default healtRouter;
