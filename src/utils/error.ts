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

export enum StatusCodes {
  OK = 200,
  BAD_REQUEST = 400,
  I_AM_TEAPOT = 418,
  INTERNAL_SERVER_ERROR = 500,
}

type ErrorStatusKeys = keyof typeof ErrorStatus;

export const ErrorStatusNameList: Array<ErrorStatusKeys> = [
  'Info',
  'Success',
  'Redirect',
  'ClientError',
  'ServerError',
];

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
