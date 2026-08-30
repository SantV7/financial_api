import { Router } from "express";
import { CreateUserAuth } from "../../middlewares/users/authCreateUsers.ts";
import { CreateUserControl } from "../../controllers/users/createUsersController.ts";

export const createUserRouter = Router();

createUserRouter.post('/users', CreateUserAuth, CreateUserControl);