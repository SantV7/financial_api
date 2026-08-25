import { Router } from "express";
import { LoginUser } from '../../middlewares/users/authLoginUsers.ts'
import { LoginUserControl } from "../../controllers/users/loginUsersController.ts";

export const loginUserRouter = Router();


loginUserRouter.post('/login', LoginUser,  LoginUserControl);