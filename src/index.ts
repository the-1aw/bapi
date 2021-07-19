import app from './app';
import { appConfig } from './utils/config';
import logger from './utils/logger';

const server = app.listen(appConfig.port, () => {
  logger.info(`Listening on port ${appConfig.port}`);
});

// Use this function to terminate everything that need to be close on shutdown
// This is use to prevent server from dumping everything like it was trash
const gracefullShutdown = () => {
  logger.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
  });
};

process.on('SIGTERM', gracefullShutdown);
