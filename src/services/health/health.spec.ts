import request from 'supertest';

import app from '../../app';

// eslint-disable-next-line global-require
jest.mock('ioredis', () => require('ioredis-mock/jest'));

describe('Health endpoints', () => {
  it('should give a healty status', async () => {
    const res = await request(app).get('/health/healthz');
    expect(res.statusCode).toEqual(200);
    expect(res.body?.status).toEqual('ok');
    expect(res.body).toHaveProperty('date');
    expect(res.body).toHaveProperty('redis');
    expect(Number.isNaN(Date.parse(res.body?.date))).toBe(false);
  });
  it('should catch an ApiError', async () => {
    const res = await request(app).get('/health/api-errorz');
    expect(res.statusCode).toEqual(508);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('message');
  });
  it('should catch an unknown error', async () => {
    const res = await request(app).get('/health/rand-errorz');
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
  });
});
