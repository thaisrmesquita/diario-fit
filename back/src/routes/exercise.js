import { Router } from 'express';
import ExerciseController from '../controllers/ExerciseController';

const exerciseController = new ExerciseController();

const routes = Router();

routes.get('/', exerciseController.index);
routes.get('/:id', exerciseController.show);
routes.post('/', exerciseController.create);
routes.delete('/:id', exerciseController.delete);

export default routes;