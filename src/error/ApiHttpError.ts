import { ErrorStatus, ErrorStatusNameList } from '../types';

const getErrorStatus = (statusCode: number) => {
  const statusIdx = Number(statusCode.toString()[0]);
  if (statusIdx in ErrorStatus) {
    return ErrorStatusNameList[statusIdx - 1];
  }
  return ErrorStatusNameList[ErrorStatus.ServerError];
};

export class ApiHttpError extends Error {
  // Error name set in contructor
  // type is equal to class name
  type: string = this.constructor.name;

  // Error status code
  // statusCode represents the http status code of the error
  // Default to 500
  statusCode: number;

  // Explicit error type
  status: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.status = getErrorStatus(this.statusCode);
    Error.captureStackTrace(this, this.constructor);
  }
}
