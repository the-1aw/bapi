import { ErrorRequestHandler } from 'express';
import { ApiHttpError } from '../utils/error';
import { StatusCodes } from '../utils/error/types';

export const errorHandlerMiddleware: ErrorRequestHandler = (error, _req, res, next) => {
  if (error instanceof ApiHttpError) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    next(error);
  }
};

export const failSafeMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error.message,
  });
};
