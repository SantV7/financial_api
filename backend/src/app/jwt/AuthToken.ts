import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthToken } from '../../types/users/users.ts';
import { prisma } from '../../../database/config.ts';


export const authUserToken = async (req: Request, res: Response) => {

    const { name, email, password } = req.body as AuthToken;

    const verifyUser = await prisma.user.findFirst({
        where: { 
          OR: [
            { email },
            { name }
          ]
        }
    });

    if(!verifyUser) {
        return res.status(401).json({error: 'User not found!'});
    }
    
    return res.status(200).json({message: 'User exists!'});
};