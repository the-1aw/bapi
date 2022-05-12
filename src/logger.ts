import { createLogger, transports, format } from 'winston';

import { winstonConfig, appConfig, EnvModesEnum } from './config';

const apiTransports = [
  new transports.File({ filename: winstonConfig.errorFile, level: 'error' }),
  new transports.File({ filename: winstonConfig.combinedFile }),
];

const apiFormat = format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), format.prettyPrint());

const logger = createLogger({
  level: winstonConfig.logLevel,
  format: apiFormat,
  transports: apiTransports,
});

if (appConfig.env !== EnvModesEnum.PRODUCTION) {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

export default logger;
