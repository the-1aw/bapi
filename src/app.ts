import express from 'express';

import routes from './services';

const app = express();

app.use(routes);

export default app;
