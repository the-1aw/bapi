import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class UnauthorizedRequestError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}
