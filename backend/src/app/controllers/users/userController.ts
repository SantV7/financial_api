import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../../../database/config.ts';
import type { ReqCreateUsers } from '../../../types/users/users.ts';
import type { ReqAuthLogin } from '../../../types/users/users.ts';
import type { ReqUpdateUser } from '../../../types/users/users.ts';
import { encrypt } from '../../utils/crypt.ts';
import jwt from 'jsonwebtoken';



export const LoginUserControl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as ReqAuthLogin;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, password: true }
    });

    if (!user) {
      return res.status(401).json({ message: 'E-mail ou Senha Incorretas.' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ message: 'E-mail ou Senha Incorretas.' });
    }

    const encryptedId = encrypt(String(user.id));

    const token = jwt.sign({ id: encryptedId }, process.env.JWT_CRYPT as string, {
      expiresIn: '7d'
    });

    return res.status(200).json({
      message: `${user.name}, login realizado com sucesso.`,
      user: {
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao realizar o login, tente novamente.' });
  }
};




export const CreateUserControl = async (req: Request, res: Response) => {
  try {
    const { name, age, email, password } = req.body as ReqCreateUsers;

    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return res.status(409).json({ message: 'Usuário ja tem um E-mail cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        age: true,
        email: true,
        createdAt: true
      }
    });

    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso.',
      user: newUser
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao cadastrar usuário.' });
  }
};


export const ListUserControl = async (req: Request, res: Response) => {
  try {

    const { id } = req.params as { id : string };

    const showToUser = await prisma.user.findUnique({
        where: { id },
        select: {
          name: true, 
          age: true
        }
    })

    if(!showToUser) {
        return res.status(404).json({message: "Usuário não encontrado."})
    }

    return res.status(200).json({
      message: 'Usuário encontrado com sucesso.',
      user: showToUser
    });
  } catch (error) {
    return res.status(500).json({message: 'Erro interno ao encontrar o usuário(a).'});
  }
};



export const deleteControler = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    const userValidator = await prisma.user.findUnique({
      where: { id }
    });

    if(!userValidator) {
      return res.status(404).json({message: 'User not found.'})
    };

    await prisma.user.delete({
      where: { id }
    });

    return res.status(200).json({ message: 'User deleted.' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};



export const updateUserControl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id : string };
    const { name, age, email, password } = req.body as ReqUpdateUser;

    const userExists = await prisma.user.findUnique({
      where: { id }
    });

    if(!userExists) {
      return res.status(404).json({message: 'Usuário não encontrado'})
    };

    let hashedPassword = userExists.password;

    if(password) {
      hashedPassword = await bcrypt.hash(password, 10)
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        name: name ?? userExists.name,
        age: age ?? userExists.age,
        email: email ?? userExists.email,
        password: hashedPassword
      }
    });

    return res.status(200).json({
      message: 'Editado com sucesso.',
      user: {
        id: updateUser.id,
        name: updateUser.name,
        email: updateUser.email,
        age: updateUser.age
      }
    });

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao atualizar usuário.' });
  }
};