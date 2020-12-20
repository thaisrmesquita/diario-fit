import { Router } from "express";
import FoodTypeController from '../controllers/FoodTypeController';

const foodTypeController = new FoodTypeController();

const routes = Router();

routes.get('/', foodTypeController.index);
routes.get('/:id', foodTypeController.show);
routes.post('/', foodTypeController.create);
routes.delete('/:id', foodTypeController.delete);


export default routes;