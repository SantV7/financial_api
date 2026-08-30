import { Router } from "express";
import { updateUserAuth } from "../../middlewares/users/authUpdateUsers.ts";
import { updateUserControl } from "../../controllers/users/updateUsersController.ts";


const updateUserRouter = Router();

updateUserRouter.get('/users/:id', updateUserAuth, updateUserControl );