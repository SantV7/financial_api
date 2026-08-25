import { type NextFunction, type Request, type Response } from 'express';

export const LoginUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as Record<string, string>;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailPattern.test(email)) {
        return res.status(400).json({ message: 'Informe um e-mail válido.' });
    }

    if (typeof password !== 'string' || password.length < 8) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
    }

    return next();
};
