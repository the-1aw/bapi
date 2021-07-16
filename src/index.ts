import app from './app';
import { appConfig } from './utils/config';
import logger from './utils/logger';

app.listen(appConfig.port, () => {
  logger.info(`Listening on port ${appConfig.port}`);
});
