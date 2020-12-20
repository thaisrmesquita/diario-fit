import { Router } from 'express';
import ExerciseDayController from '../controllers/ExerciseDayController';

const exerciseDayController = new ExerciseDayController();

const routes = Router();

routes.get('/', exerciseDayController.index);
routes.get('/:id', exerciseDayController.show);
routes.post('/', exerciseDayController.create);
routes.delete('/:id', exerciseDayController.delete);

export default routes;