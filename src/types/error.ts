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
