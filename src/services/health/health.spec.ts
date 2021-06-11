import request from 'supertest';
import app from '../../app';

describe('Health endpoints', () => {
  it('should give a healty status', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toEqual(200);
    expect(res.body?.status).toEqual('ok');
    expect(res.body).toHaveProperty('date');
    expect(Number.isNaN(Date.parse(res.body?.date))).toBe(false);
  });
});
