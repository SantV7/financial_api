import type { Request, Response, NextFunction } from 'express';
import { decryptAuth } from '../utils/token.ts';
import { decrypt } from '../utils/crypt.ts';

interface CustomRequest extends Request {
  userId?: number;
}

export const verifyJwt = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unset token!' });
  }

  try {
    const payload = (await decryptAuth(authHeader)) as { userId: string };
    req.userId = parseInt(decrypt(payload.userId));

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }
};

