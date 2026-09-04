import { Router } from "express";
import { updateUsersAuth } from "../../middlewares/users/authUpdateUsers.ts";
import { updateUserControl } from "../../controllers/users/updateUsersController.ts";

export const updateUserRouter = Router();

updateUserRouter.put('/users/:id', updateUsersAuth, updateUserControl );