import { RequestHandler } from 'express';

// Express default to 404 but in some case it might be usefull to have some control over default default response handler.
const fallbackMiddleware: RequestHandler = (_req, res) => {
  res.status(404).send('404 - NOT FOUND');
};

export default fallbackMiddleware;
