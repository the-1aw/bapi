import { StatusCodes } from '../types/error';
import { ApiHttpError } from './ApiHttpError';

export class BadRequestError extends ApiHttpError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
