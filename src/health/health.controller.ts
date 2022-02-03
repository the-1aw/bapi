import { RequestHandler } from 'express';
import { ApiHttpError, StatusCodes } from '../utils/error';
import redisClient from '../utils/store';

// Here you can set any indicator you need to provide health informations
// We use redisStatus here as a example.
export const getHealth: RequestHandler = async (_req, res, next) => {
  try {
    const redisStatus = await redisClient.ping();
    res.json({
      date: new Date(),
      status: 'ok',
      redis: redisStatus === 'PONG' ? 'OK' : 'KO',
    });
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
