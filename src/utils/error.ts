export enum ErrorTypes {
  ApiError = 'ApiError',
}

export enum ErrorStatus {
  Info = 1,
  Success,
  Redirect,
  ClientError,
  ServerError,
}

export const ErrorStatusName = ['info', 'success', 'redirect', 'clientError', 'serverError'];

const getErrorStatus = (statusCode: number) => {
  const statusIdx = Number(statusCode.toString()[0]);
  if (!(statusIdx in ErrorStatus)) {
    return ErrorStatusName[statusIdx - 1];
  }
  return ErrorStatusName[4];
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
