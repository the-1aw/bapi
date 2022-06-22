import { RequestHandler } from 'express';
import type { Redis } from 'ioredis';
import { TooManyRequests } from '../error';

interface IBaseFixedWindowRateLimiterOption {
  redisClient: Redis;
  requestLimit: number;
  ttl: number;
}

interface IFixedWindowRateLimiterOptionWithKey extends IBaseFixedWindowRateLimiterOption {
  key: string;
}

interface IFixedWindowRateLimiterOptionWithKeyGenerator extends IBaseFixedWindowRateLimiterOption {
  keyGenerator: () => string;
}

type FixedWindowRateLimiterOption =
  | IFixedWindowRateLimiterOptionWithKey
  | IFixedWindowRateLimiterOptionWithKeyGenerator;

const fixedWindow = (opts: FixedWindowRateLimiterOption): RequestHandler => {
  return async (_req, _res, next) => {
    const cacheKey =
      (opts as IFixedWindowRateLimiterOptionWithKey).key ??
      (opts as IFixedWindowRateLimiterOptionWithKeyGenerator).keyGenerator();
    const requestCount = await opts.redisClient.incr(cacheKey);
    if (requestCount === 1) {
      opts.redisClient.expire(cacheKey, opts.ttl);
    }
    if (requestCount > opts.requestLimit) {
      throw new TooManyRequests();
    }
    next();
  };
};

export default fixedWindow;
