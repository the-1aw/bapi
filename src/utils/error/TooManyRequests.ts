import { StatusCodes } from './types';
import { ApiHttpError } from './ApiHttpError';

export class TooManyRequests extends ApiHttpError {
  constructor(message = 'Too many resquets!') {
    super(StatusCodes.TOO_MANY_REQUEST, message);
  }
}
