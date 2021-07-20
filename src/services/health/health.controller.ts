import { RequestHandler } from 'express';
import { ApiHttpError } from '../../utils/error';
import redisClient from '../../utils/store';

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

export const getApiError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new ApiHttpError(508, 'Some api error occured');
    } catch (err) {
      next(err);
    }
  }, 100);
};

export const getUnknownError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new Error('Some random error occured');
    } catch (err) {
      next(err);
    }
  }, 100);
};
