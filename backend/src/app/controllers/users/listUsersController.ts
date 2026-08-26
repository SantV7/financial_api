import { type Request, type Response } from 'express';
import { prisma } from '../../../../database/config.ts';


export const ListUserControl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id : string };

    const showToUser = await prisma.user.findUnique({
        where: { id },
        select: {
          name: true, 
          age: true
        }
    })

    if(!showToUser) {
        return res.status(404).json({message: "Usuário não encontrado."})
    }

    return res.status(200).json({
      message: 'Usuário encontrado com sucesso.',
      user: showToUser
    });
  } catch (error) {
    return res.status(500).json({message: 'Erro interno ao encontrar o usuário(a).'});
  }
};