
import { prisma } from '../../../../database/config.ts';

import { type NextFunction, type Request, type Response } from 'express';

export const updateUserAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params as { id : string };

  if(!id) {
    return res.status(404).json({message: 'Não é possível editar o usuário(a).'})
  };

  if(typeof(id) !== "string") {
    return res.status(400).json({message: "O id do usuário deve string."})
  }

  return next();
};