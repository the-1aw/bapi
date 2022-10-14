import { StatusCodes } from '../types';
import { ApiHttpError } from './ApiHttpError';

export class ServiceNotAvailableError extends ApiHttpError {
  constructor(message?: string) {
    super(StatusCodes.SERVICE_NOT_AVAILABLE, message);
  }
}
