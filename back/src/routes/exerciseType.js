import { Router } from 'express';
import ExerciseTypeController from '../controllers/ExerciseTypeController';

const exerciseTypeController = new ExerciseTypeController();

const routes = Router();

routes.get('/', exerciseTypeController.index);
routes.get('/:id', exerciseTypeController.show);
routes.post('/', exerciseTypeController.create);
routes.delete('/:id', exerciseTypeController.delete);

export default routes;