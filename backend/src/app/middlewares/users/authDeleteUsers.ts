import { prisma } from '../../../../database/config.ts';

import { type NextFunction, type Request, type Response } from 'express';

export const DeleteUserAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params as { id : string };

  if(!id) {
    return res.status(404).json({message: 'Erro interno ao encontrar o usuário(a).'})
  };

  if(typeof(id) !== "string") {
    return res.status(400).json({message: "O id do usuário deve string."})
  }
      
  const authId = await prisma.user.findUnique({
    where: { id },
    select: { id: true }
  });

  if(!authId) {
    res.status(404).json({message: 'Usuário não encontrado.'})
  };

  return next();
};