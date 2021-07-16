import request from 'supertest';
import app from '../../app';

describe('Health endpoints', () => {
  it('should give a healty status', async () => {
    const res = await request(app).get('/health/healthz');
    expect(res.statusCode).toEqual(200);
    expect(res.body?.status).toEqual('ok');
    expect(res.body).toHaveProperty('date');
    expect(Number.isNaN(Date.parse(res.body?.date))).toBe(false);
  });
  it('should catch an ApiError', async () => {
    const res = await request(app).get('/health/api-errorz');
    expect(res.statusCode).toEqual(508);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('message');
  })
  it('should catch an unknown error', async () => {
    const res = await request(app).get('/health/rand-errorz');
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
  });
});
