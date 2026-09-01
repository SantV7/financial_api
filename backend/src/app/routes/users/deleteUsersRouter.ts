import { Router } from "express";
import { deleteControler } from "../../controllers/users/deleteUsersController.ts";

export const deleteUserRouter = Router();

deleteUserRouter.delete('/users/:id', deleteControler);