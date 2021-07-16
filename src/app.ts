import express from 'express';

import { errorHandlerMiddleware, failSafeMiddleware } from './utils/middlewares/errorHandler';
import errorLoggerMiddleware from './utils/middlewares/errorLogger';
import routes from './services';

const app = express();

app.use(routes);

app.use(errorLoggerMiddleware);
app.use(errorHandlerMiddleware);
app.use(failSafeMiddleware);

export default app;
