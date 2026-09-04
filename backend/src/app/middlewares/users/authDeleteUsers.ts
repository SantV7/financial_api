import { type NextFunction, type Request, type Response } from 'express';

export const DeleteUserAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params as { id : string };

  try {
    if(typeof(id) !== "string" || !id) {
      return res.status(400).json({message: "O id do usuário deve string."})
    };

      return next();
      
  } catch (err) {
    return res.status(500).json({
      message: 'Erro interno no servidor.'
    });
  };
};