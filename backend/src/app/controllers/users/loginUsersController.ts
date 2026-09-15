import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { encrypt } from '../../utils/crypt.ts';
import type { ReqAuthLogin } from '../../../types/users/users.ts';
import { prisma } from '../../../../database/config.ts';

export const LoginUserControl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as ReqAuthLogin;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, password: true }
    });

    if (!user) {
      return res.status(401).json({ message: 'E-mail ou Senha Incorretas.' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ message: 'E-mail ou Senha Incorretas.' });
    }

    const encryptedId = encrypt(String(user.id));

    const token = jwt.sign({ id: encryptedId }, process.env.JWT_CRYPT as string, {
      expiresIn: '7d'
    });

    return res.status(200).json({
      message: `${user.name}, login realizado com sucesso.`,
      user: {
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao realizar o login, tente novamente.' });
  }
};