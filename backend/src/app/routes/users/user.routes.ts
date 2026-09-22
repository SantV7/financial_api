import { Router } from 'express';
import { verifyJwt } from "../../middlewares/users/verifyJwt.ts";
import { LoginUser } from '../../middlewares/users/authLoginUsers.ts'
import { LoginUserControl } from "../../controllers/users/loginUsersController.ts";
import { CreateUserAuth } from "../../middlewares/users/authCreateUsers.ts";
import { CreateUserControl } from "../../controllers/users/createUsersController.ts";
import { deleteControler } from "../../controllers/users/deleteUsersController.ts";
import { updateUserControl } from "../../controllers/users/updateUsersController.ts";
import { ListUserControl } from "../../controllers/users/listUsersController.ts";

const userRoutes = Router();

userRoutes.get('/users/:id', verifyJwt, ListUserControl);

userRoutes.post('/users', CreateUserAuth, CreateUserControl);

userRoutes.post('/login', LoginUser, LoginUserControl);

userRoutes.put('/users/:id', verifyJwt, updateUserControl);

userRoutes.delete('/users/:id', verifyJwt, deleteControler);

export default userRoutes;