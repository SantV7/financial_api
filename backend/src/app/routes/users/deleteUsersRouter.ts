import { Router } from "express";
import { deleteControler } from "../../controllers/users/deleteUsersController.ts";
import { DeleteUserAuth } from "../../middlewares/users/authDeleteUsers.ts";

export const deleteUserRouter = Router();

deleteUserRouter.delete('/users/:id', DeleteUserAuth,deleteControler);