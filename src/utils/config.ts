export enum EnvModes {
  Dev = 'development',
  Local = 'local',
  Test = 'test',
  Production = 'production',
}

export const appConfig = {
  port: process.env.PORT ?? '1234',
  env: process.env.NODE_ENV ?? EnvModes.Dev,
  // Only used for testing purpose
  // Might change later but for now alway mock redis while testing
  shouldMockRedis: true,
};

export const redisConfig = {
  host: process.env.REDIS_HOST ?? '127.0.0.1',
  port: process.env.REDIS_PORT ?? '6379',
  password: process.env.REDIS_PASSWORD,
};

const defaultLogLevel = appConfig.env === EnvModes.Production ? 'notice' : 'debug';

export const winstonConfig = {
  logLevel: process.env.LOG_LEVEL ?? defaultLogLevel,
  errorFile: process.env.LOG_PATH_ERROR ?? 'error.log',
  combinedFile: process.env.LOG_PATH_COMBINED ?? 'combined.log',
};
