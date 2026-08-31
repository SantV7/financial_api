import { Router } from "express";

export const deleteUserRouter = Router();

deleteUserRouter.delete('/users/:id');