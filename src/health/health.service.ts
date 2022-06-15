import redisClient from '../store';
import type { IGetHealthStatusOptions, IHealthStatus } from '../types';

export const getHealthStatus = async (opts: IGetHealthStatusOptions): Promise<IHealthStatus> => {
  const apiStatus: IHealthStatus = {
    date: new Date(),
    status: 'ok',
  };
  if (opts.redis) {
    const redisStatus = await redisClient.ping();
    apiStatus.redis = redisStatus === 'PONG' ? 'ok' : 'ko';
  }
  return apiStatus;
};
