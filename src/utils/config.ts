export const appConfig = {
  port: process.env.PORT ?? '1234',
};

export const winstonConfig = {
  errorFile: process.env.LOG_PATH_ERROR ?? 'error.log',
  combinedFile: process.env.LOG_PATH_COMBINED ?? 'combined.log',
};
