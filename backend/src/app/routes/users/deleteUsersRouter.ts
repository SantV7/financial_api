import { Router } from "express";
import { deleteControler } from "../../controllers/users/deleteUsersController.ts";
import { verifyJwt } from "../../middlewares/users/verifyJwt.ts";

export const deleteUserRouter = Router();

deleteUserRouter.delete('/users/:id',verifyJwt,deleteControler);