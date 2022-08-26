export enum EnvModesEnum {
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  TEST = 'test',
  PRODUCTION = 'production',
}

export type EnvModes = `${EnvModesEnum}`;

export interface IWinstonConfig {
  logLevel: string;
  errorFile: string;
  combinedFile: string;
}

export interface IAppConfig {
  port: number;
  env: EnvModes;
  // Only used for testing purpose
  // Might change later but for now alway mock redis while testing
  shouldMockRedis: boolean;
}

export interface IMorganConfig {
  enabled: boolean;
  format: string;
}
