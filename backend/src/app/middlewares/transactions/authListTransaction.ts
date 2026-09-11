import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../../../database/config.ts";

export const listTransactions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; 

    const transactions = await prisma.transaction.findMany({
      where: { id: id as string },
      orderBy: { createdAt: "desc" },
    });

    if (!transactions) {
      return res.status(404).json({ message: "No transactions found for this user." });
    }

    return next();
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};