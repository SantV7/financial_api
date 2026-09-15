import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token de acesso não fornecido.' });
  };

  try {
    const decoded = jwt.verify(token, process.env.JWT_CRYPT as string);
    (req as any).user = decoded;
    return next();
  } catch {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  };
};