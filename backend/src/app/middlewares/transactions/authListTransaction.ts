import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../../../database/config.ts";

export const listTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const userExists = await prisma.user.findUnique({
      where: { id: id as string },
    });

    if (!userExists) {
      return res.status(404).json({ message: "User not found." });
    }

    return next();
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};