import { createLogger, transports, format } from 'winston';

import { winstonConfig, appConfig, EnvModes } from './config';

const apiTransports = [
  new transports.File({ filename: winstonConfig.errorFile, level: 'error' }),
  new transports.File({ filename: winstonConfig.combinedFile }),
];

const apiFormat = format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }));

const logger = createLogger({
  format: apiFormat,
  transports: apiTransports,
});

if (appConfig.env !== EnvModes.Production) {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

export default logger;
