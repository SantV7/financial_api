import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';

import { prisma } from '../../../../database/config.ts';
import type { ReqCreateUsers } from '../../../types/users/users.ts';

export const CreateUserControl = async (req: Request, res: Response) => {
  try {
    const { name, age, email, password } = req.body as ReqCreateUsers;

    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return res.status(409).json({ message: 'Usuário ja tem um E-mail cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        age: true,
        email: true,
        createdAt: true
      }
    });

    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso.',
      user: newUser
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao cadastrar usuário.' });
  }
};