import { type NextFunction, type Request, type Response } from 'express';

export const LoginUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as Record<string, string>;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [localPart, domainPart] = email.split("@");
  
   if(localPart.length <= 0) {
     res.status(400).json({message: "Deve haver ao menos um caractere antes do @"});
   };

   if(localPart.length > 60) {
    return res.status(400).json({message: "Email não pode ser maior que 60 caracteres."});
   };

   const varsEmail: string[] = ['outlook.com', "gmail.com", 'hotmail.com'];

   if(!varsEmail.includes(domainPart)) {
    return res.status(400).json({message: "A extensão de Email não é valida."});
   };    
    if (typeof email !== 'string' || !emailPattern.test(email)) {
        return res.status(400).json({ message: 'Informe um e-mail válido.' });
    }

    if (typeof password !== 'string' || password.length < 8) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
    }

    return next();
};
