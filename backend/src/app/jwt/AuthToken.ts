import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthToken } from '../../types/users/users.ts';
import { prisma } from '../../../database/config.ts';


export const authUserToken = async (req: Request, res: Response) => {

    const { name, email } = req.body as AuthToken;

    let whereData = {}

    if(email) {
      whereData = { email };
    } else if (name) {
      whereData = { name };
    } else {
      return res.status(401).json({message: 'We need E-mail or Passowrd.'})
    }

    const verifyUser = await prisma.user.findFirst({
      where: whereData,
      select: {
        name: true,
        email: true
      }
    });

    if(!verifyUser) {
        return res.status(401).json({error: 'User not found!'});
    };
    
    return res.status(200).json({user: verifyUser});
};