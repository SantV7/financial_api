import { type Request, type Response } from 'express';
import { prisma } from '../../../../database/config.ts';

export const updateUserControl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id : string };

    const { name, age, email, password } = req.body ;

    const userExists = await prisma.user.findUnique({
      where: { id }
    });

    return res.status(201).json({
      message: 'Editado com sucesso.',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao cadastrar usuário.' });
  }
};