import { createLogger, transports, format } from 'winston';

import config from './config';

const apiTransports = [
  new transports.File({ filename: config.winston.errorFile, level: 'error' }),
  new transports.File({ filename: config.winston.combinedFile }),
];

const apiFormat = format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }));

const logger = createLogger({
  format: apiFormat,
  transports: apiTransports,
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

export default logger;
