import Ajv, { JSONSchemaType } from 'ajv';
import type { IGetHealthStatusOptions } from '../../types';

const ajv = new Ajv();

const schema: JSONSchemaType<IGetHealthStatusOptions> = {
  type: 'object',
  properties: {
    redis: { type: 'string', const: 'true' },
  },
  required: [],
  additionalProperties: true,
};

const validator = ajv.compile(schema);

export default validator;
