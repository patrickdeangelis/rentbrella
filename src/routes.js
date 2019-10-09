import { Router } from 'express';

import PremiseController from './app/controllers/PremiseController';

const routes = Router();

routes.post('/v1/premises', PremiseController.store);
routes.get('/v1/premises', PremiseController.all);

export default routes;
