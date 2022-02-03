import Redis from 'ioredis';

import { redisConfig } from './utils/config';
import logger from './utils/logger';

const redisClient = new Redis({
  host: redisConfig.host,
  port: Number(redisConfig.port),
  password: redisConfig.password,
});

redisClient.on('connect', () => {
  logger.info('Connected to redis!');
});

redisClient.on('connect', () => {
  logger.info('Redis client ready!');
});

redisClient.on('error', (err) => {
  logger.error(err);
});

export default redisClient;
