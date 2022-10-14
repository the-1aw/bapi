import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class NotFoundRequestError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.NOT_FOUND, message);
  }
}
