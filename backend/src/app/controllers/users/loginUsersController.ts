import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import type { ReqAuthLogin } from '../../../types/users/users.ts';
import { prisma } from '../../../../database/config.ts';


export const LoginUserControl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as ReqAuthLogin;

    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            name: true,
            email: true,
            password: true
        }
    });

    if (!user) {
        return res.status(401).json({message: 'E-mail ou Senha incorretas.'});
    };

    if (user.password !== password) {
        return res.status(401).json({ message: 'E-mail ou senha incorretos.' });
    };


    return res.status(200).json({
        message: `${user.name}, login realizado com sucesso.`,
        user: {
            name: user.name,
            email :user.email,
        },
    });
  } catch(err) {
        return res.status(500).json({message: 'Erro ao realizar o login, tente novamente.'})
  }
};
