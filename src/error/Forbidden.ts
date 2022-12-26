import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class ForbidenRequestError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.FORBIDDEN, message);
  }
}
