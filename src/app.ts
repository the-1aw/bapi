import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandlerMiddleware, failSafeMiddleware } from './middlewares/errorHandler';
import errorLoggerMiddleware from './middlewares/errorLogger';
import healthRouter from './health';
import fallbackMiddleware from './middlewares/fallback';
import { morganConfig } from './config';

const app = express();

app.use(helmet() as express.RequestHandler);
app.use(
  express.urlencoded({
    extended: true,
  }) as express.RequestHandler,
);
app.use(express.json() as express.RequestHandler);

if (morganConfig.enabled) {
  app.use(morgan(morganConfig.format) as express.RequestHandler);
}

app.use('/healthz', healthRouter);
app.use(fallbackMiddleware);
app.use(errorLoggerMiddleware);
app.use(errorHandlerMiddleware);
app.use(failSafeMiddleware);

export default app;
