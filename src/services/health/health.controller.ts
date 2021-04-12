import { RequestHandler } from 'express';

export const getHealth: RequestHandler = (_req, res) => {
  res.json({
    date: new Date(),
    status: 'ok',
  });
};
