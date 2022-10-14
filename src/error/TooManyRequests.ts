import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class TooManyRequestError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.TOO_MANY_REQUEST, message);
  }
}
