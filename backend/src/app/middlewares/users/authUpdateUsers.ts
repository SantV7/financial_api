import { type NextFunction, type Request, type Response } from 'express';
import type { ReqUpdateUser } from '../../../types/users/users.ts';

export const updateUsersAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, age, email, password } = req.body as ReqUpdateUser;

    if (name !== undefined && (typeof name !== 'string' || name.trim().length < 3)) {
      return res.status(400).json({ message: 'Informe um nome válido (mínimo de 3 caracteres).' });
    }

    if (age !== undefined && (typeof age !== 'number' || age < 18)) {
      return res.status(400).json({message: 'O usuário deve ser maior de idade (idade mínima: 18).'});
    };

    if (email !== undefined) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (typeof email !== 'string' || !emailPattern.test(email)) {
        return res.status(400).json({ message: 'Informe um e-mail válido.' });
      }
    };

    if (password !== undefined && (typeof password !== 'string' || password.length < 8)) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
    };

    return next();
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  };
};