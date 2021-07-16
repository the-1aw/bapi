export enum EnvModes {
  Dev = 'development',
  Local = 'local',
  Test = 'test',
  Production = 'production',
}

export const appConfig = {
  port: process.env.PORT ?? '1234',
  env: process.env.NODE_ENV ?? EnvModes.Dev,
};

const defaultLogLevel = appConfig.env === EnvModes.Production ? 'notice' : 'debug';

export const winstonConfig = {
  logLevel: process.env.LOG_LEVEL ?? defaultLogLevel,
  errorFile: process.env.LOG_PATH_ERROR ?? 'error.log',
  combinedFile: process.env.LOG_PATH_COMBINED ?? 'combined.log',
};
