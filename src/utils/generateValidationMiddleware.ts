import type { ValidateFunction } from 'ajv';
import type { RequestHandler } from 'express';
import { BadRequestError } from '../error';

interface ISchemaValidatorOptions {
  type: 'body' | 'query';
}

const genMiddlewareSchemaValidator = <T>(
  validator: ValidateFunction<T>,
  opts: ISchemaValidatorOptions,
): RequestHandler => {
  return (req, _res, next) => {
    const objectToValidate = opts.type === 'body' ? req.body : req.query;
    const validation = validator(objectToValidate);
    if (validation) {
      return next();
    }
    if (validator.errors) {
      return next(new BadRequestError(validator.errors[0].message ?? 'Validation error'));
    }
    return next(new BadRequestError('Validation error'));
  };
};

export default genMiddlewareSchemaValidator;
