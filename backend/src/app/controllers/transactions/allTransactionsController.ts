import type { Request, Response } from "express";
import { prisma } from "../../../../database/config.ts";

export const allTransactionControler = async (req: Request, res: Response) => {
  try {
    const transactions = await prisma.transaction.findMany({
      select: {
        id: true,
        balance: true,
        invoice: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(transactions);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};