import { IWinstonConfig } from '../types';

const winstonConfig: IWinstonConfig = {
  logLevel: process.env.LOG_LEVEL ?? 'debug',
  errorFile: process.env.LOG_PATH_ERROR ?? 'error.log',
  combinedFile: process.env.LOG_PATH_COMBINED ?? 'combined.log',
};

export default winstonConfig;
