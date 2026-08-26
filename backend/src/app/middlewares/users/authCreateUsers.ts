import { type NextFunction, type Request, type Response } from 'express';

export const CreateUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const { name, age, email, password } = req.body;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  if (!name || typeof name !== 'string' || name.trim().length < 3) {
    return res.status(400).json({ message: 'Informe um nome válido (mínimo de 3 caracteres).' });
  }

  if (typeof age !== 'number' || age < 18) {
    return res.status(400).json({ message: 'O usuário deve ser maior de idade (idade mínima: 18).' });
  }

  if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
    return res.status(400).json({ message: 'Informe um e-mail válido.' });
  }

  if (!password || typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
  } 

  return next();
};