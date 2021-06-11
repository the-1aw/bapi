const config = {
  port: process.env.PORT ?? '1234',
  winston: {
    errorFile: process.env.LOG_PATH_ERROR ?? 'error.log',
    combinedFile: process.env.LOG_PATH_COMBINED ?? 'combined.log',
  },
};

export default config;
