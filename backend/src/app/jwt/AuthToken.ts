import type { Request, Response } from 'express';
import type { AuthToken } from '../../types/users/users.ts';
import bcrypt from 'bcrypt';
import { prisma } from '../../../database/config.ts';
import jwt from 'jsonwebtoken';


export const authUserToken = async (req: Request, res: Response) => {

    const { name, email, password } = req.body as AuthToken;

    if(!email || !name || !password) {
      return res.status(400).json({message: 'E-mail, Name and Password are required.'});
    }

    const verifyUser = await prisma.user.findFirst({
      where: {
        name,
        email
      },
      select: {
        name : true,
        email : true,
        password: true
      }
    });

    if(!verifyUser) {
      return res.status(401).json({error: 'User not found!'});
    };

    const checkPassword = await bcrypt.compare(password, verifyUser.password);

    if (!checkPassword) {
      return res.status(401).json({error: 'Invalid password!'});
    };
    
    return res.status(200).json({user: {
      name: verifyUser.name,
      email: verifyUser.email
    }});
};