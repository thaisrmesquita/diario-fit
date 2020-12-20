import { Router } from 'express';
import WeightController from '../controllers/WeigthController';

const weightController = new WeightController();

const routes = Router();

routes.get('/', weightController.index);
routes.get('/:id', weightController.show);
routes.post('/', weightController.create);
routes.delete('/:id', weightController.delete);

export default routes;