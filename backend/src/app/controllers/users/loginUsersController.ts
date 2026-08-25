import { type Request, type Response } from 'express';
import type { ReqAuthLogin } from '../../../types/users/users.ts';

export const LoginUserControl = (req: Request, res: Response) => {
    const { email, password } = req.body as ReqAuthLogin;

    return res.status(200).json({
        message: 'Login realizado com sucesso.',
        user: {
            email,
            password
        },
    });
};
