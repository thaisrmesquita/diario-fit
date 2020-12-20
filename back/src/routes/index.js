  
import { Router } from "express";
import user from './user';
import foodType from './foodType';
import food from './food';
import measure from './measure';
import goal from './goal';
import exercise from './exercise';
import exerciseType from './exerciseType';
import exerciseDay from './exerciseDay';
import weight from './weight';

const routes = Router();

routes.use("/weights", weight);
routes.use("/exerciseDays", exerciseDay);
routes.use("/exerciseTypes", exerciseType);
routes.use("/exercises", exercise);
routes.use("/foods", food);
routes.use("/foodTypes", foodType);
routes.use("/measures", measure);
routes.use("/goals", goal);
routes.use("/users", user);

export default routes;