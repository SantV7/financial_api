import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../../../database/config.ts";

export const authAllTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required in route parameters." });
    }

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