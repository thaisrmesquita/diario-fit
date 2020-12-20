import { Router } from 'express';
import MeasureController from '../controllers/MeasureContoller';

const measureController = new MeasureController();

const routes = Router();

routes.get('/', measureController.index);
routes.get('/:id', measureController.show);
routes.post('/', measureController.create);
routes.delete('/:id', measureController.delete);


export default routes;