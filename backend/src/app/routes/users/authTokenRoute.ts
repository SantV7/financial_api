import { Router } from "express";
import { authUserToken } from "../../jwt/AuthToken.ts";

export const authTokenRoute = Router();

authTokenRoute.post('/auth', authUserToken)

