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
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  I_AM_TEAPOT = 418,
  TOO_MANY_REQUEST = 429,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_NOT_AVAILABLE = 503,
}

type ErrorStatusKeys = keyof typeof ErrorStatus;

export const ErrorStatusNameList: Array<ErrorStatusKeys> = [
  'Info',
  'Success',
  'Redirect',
  'ClientError',
  'ServerError',
];
