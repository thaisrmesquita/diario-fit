import { Router } from "express";
import UserController from '../controllers/UserController';

const userController = new UserController();

const routes = Router();

routes.get('/', userController.index);
routes.get('/:id', userController.show);
routes.post('/', userController.create);
routes.delete('/:id', userController.delete);


export default routes;