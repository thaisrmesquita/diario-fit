import { Router } from "express";
import FoodController from '../controllers/FoodController';

const foodController = new FoodController();

const routes = Router();

routes.get('/', foodController.index);
routes.get('/:id', foodController.show);
routes.post('/', foodController.create);
routes.delete('/:id', foodController.delete);


export default routes;