import Redis from 'ioredis';

import { redisConfig } from './config';
import logger from './logger';

const redisClient = new Redis({
  host: redisConfig.host,
  port: Number(redisConfig.port),
  password: redisConfig.password,
});

redisClient.on('connect', () => {
  logger.info('Connected to redis!');
});

redisClient.on('error', (err) => {
  logger.error(err);
});

export default redisClient;
