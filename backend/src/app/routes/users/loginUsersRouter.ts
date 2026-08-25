import { Router } from "express";
import { LoginUser } from '../../middlewares/users/authLoginUsers.ts'
import { LoginUserControl } from "../../controllers/users/loginUsersController.ts";

const loginUserRouter = Router();


loginUserRouter.post('/users', LoginUser,  LoginUserControl);