import type { Request, Response } from "express";
import { prisma } from "../../../../database/config.ts";


export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { balance, invoice } = req.body;
    const { id } = req.params;

    const formattedInvoice = Number(invoice.toFixed(2));
    
    const newTransaction = await prisma.transaction.create({
      data: {
        userId: id as string,
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



export const listTransactionControler = async (req: Request, res: Response) => {
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