import { Router } from "express";
import { updateUserControl } from "../../controllers/users/updateUsersController.ts";
import { verifyJwt } from "../../middlewares/users/verifyJwt.ts";

export const updateUserRouter = Router();

updateUserRouter.put('/users/:id', verifyJwt, updateUserControl );