import type { Request, Response } from "express";
import { prisma } from "../../../../database/config.ts";

export const listTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const listData = await prisma.transaction.findMany({
      where: { userId: id as string },
      select: {
        balance: true,
        invoice: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return res.status(200).json({
      message: "Transactions retrieved successfully!",
      listData,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};