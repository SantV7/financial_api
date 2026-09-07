import { Router } from "express";
import { authCreateTransaction } from "../../middlewares/transactions/authCreateTransaction.ts";
import { createTransaction } from "../../controllers/transactions/createTransactionsController.ts";

export const createTransactionsRoute = Router();

createTransactionsRoute.post('/transactions', authCreateTransaction, createTransaction);

