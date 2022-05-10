import redisClient from '../store';
import { IHealthStatus } from './types';

export const getHealthStatus = async (): Promise<IHealthStatus> => {
  const redisStatus = await redisClient.ping();
  return {
    date: new Date(),
    status: 'ok',
    redis: redisStatus === 'PONG' ? 'ok' : 'ko',
  };
};
