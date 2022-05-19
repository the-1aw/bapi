import { RequestHandler } from 'express';
import { ApiHttpError } from '../error';
import { StatusCodes } from '../types/error';
import { getHealthStatus } from './health.service';

// Here you can set any indicator you need to provide health informations
// We use redisStatus here as a example.
export const getHealth: RequestHandler = async (_req, res, next) => {
  try {
    const healthStatus = await getHealthStatus();
    res.json(healthStatus);
  } catch (err) {
    next(err);
  }
};

// This is only for testing purpose to verify custom error support
export const getApiError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new ApiHttpError(StatusCodes.I_AM_TEAPOT, 'Some api error occured');
    } catch (err) {
      next(err);
    }
  }, 100);
};

// This is only for testing purpose to verify default error support
export const getUnknownError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new Error('Some random error occured');
    } catch (err) {
      next(err);
    }
  }, 100);
};
