import express from 'express';

const app = express();

app.get('/healthz', (_, res) => {
  res.sendStatus(200);
});

export default app;
