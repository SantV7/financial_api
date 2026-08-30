import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthToken } from '../../types/users/users.ts';
import { prisma } from '../../../database/config.ts';
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

export const authUserToken = async (req: Request, res: Response) => {

    const { name, email, password } = req.body as AuthToken;

    const verifyUser = await prisma.user.findUnique({
        where: { email },
        select: {
            name: true,
            email: true
        }
    })

};