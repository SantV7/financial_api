import { type Request, type Response } from 'express';
import type { ReqAuthLogin } from '../../../types/users/users.ts';
import { prisma } from '../../../../database/config.ts';

export const LoginUserControl = async (req: Request, res: Response) => {
    const { email, password } = req.body as ReqAuthLogin;

    const user = await prisma.user.findUnique({
        where: {email}
    });




    return res.status(200).json({
        message: 'Login realizado com sucesso.',
        user: {
            email,
            password
        },
    });
};
