import { EnvModes, EnvModesEnum, IAppConfig } from '../types';

const appConfig: IAppConfig = {
  port: Number(process.env.PORT ?? '1234'),
  env: (process.env.NODE_ENV as EnvModes) ?? EnvModesEnum.DEVELOPMENT,
  // Only used for testing purpose
  // Might change later but for now alway mock redis while testing
  shouldMockRedis: true,
};

export default appConfig;
