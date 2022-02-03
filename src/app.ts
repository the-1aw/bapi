import express from 'express';
import helmet from 'helmet';

import { errorHandlerMiddleware, failSafeMiddleware } from './middlewares/errorHandler';
import errorLoggerMiddleware from './middlewares/errorLogger';
import healthRouter from './health';

const app = express();

app.use(helmet() as express.RequestHandler);
app.use(
  express.urlencoded({
    extended: true,
  }) as express.RequestHandler,
);
app.use(express.json() as express.RequestHandler);

app.use('/healthz', healthRouter);

app.use(errorLoggerMiddleware);
app.use(errorHandlerMiddleware);
app.use(failSafeMiddleware);

export default app;
