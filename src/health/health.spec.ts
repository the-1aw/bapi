import request from 'supertest';

import app from '../app';
import { StatusCodes } from '../types';

// eslint-disable-next-line global-require
jest.mock('ioredis', () => require('ioredis-mock/jest'));

describe('Health endpoints', () => {
  it('should give a healty status without redis', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body?.status).toEqual('ok');
    expect(res.body).toHaveProperty('date');
    expect(res.body).not.toHaveProperty('redis');
    expect(Number.isNaN(Date.parse(res.body?.date))).toBe(false);
  });

  it('should give a healty status with redis', async () => {
    const res = await request(app).get('/healthz?redis=true');
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body?.status).toEqual('ok');
    expect(res.body).toHaveProperty('date');
    expect(res.body).toHaveProperty('redis');
    expect(Number.isNaN(Date.parse(res.body?.date))).toBe(false);
  });

  it('should throw bad request error', async () => {
    const res = await request(app).get('/healthz?redis=false');
    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });

  it('should catch an ApiError', async () => {
    const res = await request(app).get('/healthz/api-error');
    expect(res.statusCode).toEqual(StatusCodes.I_AM_TEAPOT);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('message');
  });

  it('should catch an unknown error', async () => {
    const res = await request(app).get('/healthz/rand-error');
    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res.body).toHaveProperty('message');
  });
});
