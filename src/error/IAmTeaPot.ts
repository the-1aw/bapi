import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class IAmTeaPotRequestError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.I_AM_TEAPOT, message);
  }
}
