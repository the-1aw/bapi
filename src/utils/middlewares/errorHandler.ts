import {ErrorRequestHandler} from 'express'
import { ApiHttpError } from '../error';


export const errorHandlerMiddleware: ErrorRequestHandler = (error, _req, res, next) => {
    if (error instanceof ApiHttpError) {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
        })
    } else {
        next(error);
    }
};

export const failSafeMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
    res.status(500).json({
        message: error.message,
    });
}

