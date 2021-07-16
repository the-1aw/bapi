import { ErrorRequestHandler } from 'express';
import logger from '../logger';

const logErrorMiddleware: ErrorRequestHandler = (error, _req, _res, next) => {
  logger.debug(error.stack);
  logger.error(error.message);
  next(error);
};

export default logErrorMiddleware;
