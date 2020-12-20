import { Router } from 'express';
import GoalController from '../controllers/GoalController';
const goalController = new GoalController();

const routes = Router();

routes.get('/', goalController.index);
routes.get('/:id', goalController.show);
routes.post('/', goalController.create);
routes.delete('/:id', goalController.delete);

export default routes;