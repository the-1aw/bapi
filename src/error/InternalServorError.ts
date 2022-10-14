import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class InternalServerError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}
