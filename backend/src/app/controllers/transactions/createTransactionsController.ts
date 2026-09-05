import type { Request, Response } from "express";
import type { ReqCreateTransaction } from "../../../types/transactions/transaction.ts";
import { prisma } from "../../../../database/config.ts";

export const createTransaction = async (
  req: Request<{}, {}, ReqCreateTransaction>,
  res: Response
) => {
  try {
    const { id, balance, invoice } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Id is required to do a transaction.",
      });
    }

    if (balance === undefined || balance < 0) {
      return res.status(400).json({
        message: "Balance can't be less than 0.",
      });
    };

    if (invoice === undefined || invoice < 0) {
      return res.status(400).json({
        message: "Invoice can't be a negative value.",
      });
    };

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
  };
};