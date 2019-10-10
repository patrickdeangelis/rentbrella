import { Router } from 'express';

import PremiseController from './app/controllers/PremiseController';
import StationController from './app/controllers/StationController';

const routes = Router();

routes.post('/v1/premises', PremiseController.store);
routes.get('/v1/premises', PremiseController.all);
routes.post('/v1/stations', StationController.store);

export default routes;
