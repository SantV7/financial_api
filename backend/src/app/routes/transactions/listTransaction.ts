import { Router } from "express";
import { listTransactions } from "../../middlewares/transactions/authListTransaction.ts";
import { listTransactionControler } from "../../controllers/transactions/listTransactionsController.ts";
import { verifyJwt } from "../../middlewares/users/verifyJwt.ts";

export const listTransactionsRoute = Router();

listTransactionsRoute.get('/transactions/:id', verifyJwt, listTransactions, listTransactionControler);

