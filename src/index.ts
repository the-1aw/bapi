import app from './app';
import config from './utils/config';
import logger from './utils/logger';

app.listen(config.port, () => {
  logger.info(`Listening on port ${config.port}`);
});
