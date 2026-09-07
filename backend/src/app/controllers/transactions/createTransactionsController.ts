import type { Request, Response } from "express";
import { prisma } from "../../../../database/config.ts";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { balance, invoice } = req.body;
    const { id } = req.params;

    const formattedInvoice = Number(invoice.toFixed(2));

    const newTransaction = await prisma.transaction.create({
      data: {
        userId: id,
        balance,
        invoice: formattedInvoice,
      },
    });

    return res.status(201).json({
      message: "Transaction has been successful!",
      transaction: newTransaction,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};