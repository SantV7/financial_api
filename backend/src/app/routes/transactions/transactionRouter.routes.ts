import { Router } from "express";
import { authCreateTransaction } from "../../middlewares/transactions/authCreateTransaction.ts";
import { allTransactionControler, createTransaction, listTransactionControler } from "../../controllers/transactions/transactionController.ts";
import { verifyToken } from "../../middlewares/authentification.ts";
import { listTransactions } from "../../middlewares/transactions/authListTransaction.ts";
import { authAllTransaction } from "../../middlewares/transactions/authAllTransaction.ts";

export const TransactionsRoute = Router();

TransactionsRoute.get('/transactions/:id', verifyToken, listTransactions, listTransactionControler);

TransactionsRoute.get('/transactions/all/:id', authAllTransaction, allTransactionControler ); 

TransactionsRoute.post('/transactions', authCreateTransaction, createTransaction);

