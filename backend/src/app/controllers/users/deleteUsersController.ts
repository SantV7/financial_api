import type { Request, Response } from "express";
import { prisma } from "../../../../database/config.ts";

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