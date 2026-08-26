import { Router } from "express";
import { CreateUserAuth } from "../../middlewares/users/authCreateUsers.ts";
import { CreateUserControl } from "../../controllers/users/createUsersController.ts";

const createUserRouter = Router();

createUserRouter.post('/users/create', CreateUserAuth, CreateUserControl);