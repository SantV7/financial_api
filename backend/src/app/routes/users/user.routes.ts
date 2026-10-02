import { Router } from 'express';
import { LoginUser } from '../../middlewares/users/authLoginUsers.ts'
import { LoginUserControl } from "../../controllers/users/userController.ts";
import { CreateUserAuth } from "../../middlewares/users/authCreateUsers.ts";
import { CreateUserControl } from "../../controllers/users/userController.ts";
import { deleteControler } from "../../controllers/users/userController.ts";
import { updateUserControl } from "../../controllers/users/userController.ts";
import { ListUserControl } from "../../controllers/users/userController.ts";
import { verifyToken } from '../../middlewares/authentification.ts';

const userRoutes = Router();

userRoutes.get('/users/:id', verifyToken, ListUserControl);

userRoutes.post('/users', CreateUserAuth, CreateUserControl);

userRoutes.post('/login', LoginUser, LoginUserControl);

userRoutes.put('/users/:id', verifyToken, updateUserControl);

userRoutes.delete('/users/:id', verifyToken, deleteControler);

export default userRoutes;