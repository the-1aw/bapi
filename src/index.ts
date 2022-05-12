import app from './app';
import { appConfig } from './config';
import redisClient from './store';
import logger from './logger';

const server = app.listen(appConfig.port, () => {
  logger.info(`Listening on port ${appConfig.port}`);
});

// Use this function to terminate everything that need to be close on shutdown
// This is use to prevent server from dumping everything like it was trash
const gracefulShutdown = () => {
  logger.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
    if (redisClient) {
      redisClient.quit();
      logger.debug('Redis disconnected');
    }
  });
};

process.on('SIGTERM', gracefulShutdown);
