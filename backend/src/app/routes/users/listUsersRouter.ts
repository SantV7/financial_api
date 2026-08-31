import { Router } from "express";
import { ListUserAuth } from "../../middlewares/users/authListUsers.ts";
import { ListUserControl } from "../../controllers/users/listUsersController.ts";

export const listUserRouter = Router();

listUserRouter.get('/users/:id', ListUserAuth, ListUserControl);