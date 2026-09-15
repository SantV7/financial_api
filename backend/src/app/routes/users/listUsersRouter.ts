import { Router } from "express";
import { ListUserControl } from "../../controllers/users/listUsersController.ts";
import { verifyJwt } from "../../middlewares/users/verifyJwt.ts";

export const listUserRouter = Router();

listUserRouter.get('/users/:id', verifyJwt, ListUserControl);