import { type NextFunction, type Request, type Response } from 'express';

export const LoginUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, age, email, password } = req.body as Record<string, unknown>;

    if (typeof name !== 'string' || name.trim().length < 3) {
        return res.status(400).json({ message: 'O nome deve ter pelo menos 3 caracteres.' });
    }

    if (typeof age !== 'number' || !Number.isInteger(age) || age < 18 || age > 120) {
        return res.status(400).json({ message: 'A idade deve ser um número inteiro entre 18 e 120.' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailPattern.test(email)) {
        return res.status(400).json({ message: 'Informe um e-mail válido.' });
    }

    if (typeof password !== 'string' || password.length < 8) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
    }

    return next();
};
