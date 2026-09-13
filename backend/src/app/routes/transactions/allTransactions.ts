import { Router } from "express";
import { authAllTransaction } from "../../middlewares/transactions/authAllTransaction.ts";
import { allTransactionControler } from "../../controllers/transactions/allTransactionsController.ts";

export const allTransactionsRoute = Router();

allTransactionsRoute.get('/transactions/all/:id', authAllTransaction, allTransactionControler );

