import { type Request, type Response } from 'express';
import { prisma } from '../../../../database/config.ts';
import type { ReqUpdateUser } from '../../../types/users/users.ts';
import bcrypt from 'bcrypt';

export const updateUserControl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id : string };
    const { name, age, email, password } = req.body as ReqUpdateUser;

    const userExists = await prisma.user.findUnique({
      where: { id }
    });

    if(!userExists) {
      return res.status(404).json({message: 'Usuário não encontrado'})
    };

    let hashedPassword = userExists.password;

    if(password) {
      hashedPassword = await bcrypt.hash(password, 10)
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        name: name ?? userExists.name,
        age: age ?? userExists.age,
        email: email ?? userExists.email,
        password: hashedPassword
      }
    });

    return res.status(200).json({
      message: 'Editado com sucesso.',
      user: {
        id: updateUser.id,
        name: updateUser.name,
        email: updateUser.email,
        age: updateUser.age
      }
    });

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao atualizar usuário.' });
  }
};