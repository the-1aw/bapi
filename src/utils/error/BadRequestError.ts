import { StatusCodes } from './types';
import { ApiHttpError } from './ApiHttpError';

export class BadRequestError extends ApiHttpError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
