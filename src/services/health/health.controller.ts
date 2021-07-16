import { RequestHandler } from 'express';
import {ApiHttpError} from '../../utils/error'

export const getHealth: RequestHandler = (_req, res) => {
  res.json({
    date: new Date(),
    status: 'ok',
  });
};

export const getApiError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new ApiHttpError(508, "Some api error occured");
    } catch(err) {
      next(err);
    }
  }, 100)
};

export const getUnknownError: RequestHandler = (_req, _res, next) => {
  setTimeout(() => {
    try {
      throw new Error("Some random error occured");
    } catch(err) {
      next(err);
    }
  }, 100)
}

