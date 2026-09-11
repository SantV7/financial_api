import express, { type Express, type Request, type Response } from 'express';
import { loginUserRouter } from './app/routes/users/loginUsersRouter.ts';
import { createUserRouter } from './app/routes/users/createUsersRouter.ts';
import { authTokenRoute } from './app/routes/users/authTokenRoute.ts';
import { updateUserRouter } from './app/routes/users/updateUsersRouter.ts';
import { listUserRouter } from './app/routes/users/listUsersRouter.ts';
import { deleteUserRouter } from './app/routes/users/deleteUsersRouter.ts';
import { createTransactionsRoute } from './app/routes/transactions/createTransactions.ts';
import { listTransactionsRoute } from './app/routes/transactions/listTransaction.ts';

export const app: Express = express();

app.use(express.json());

app.use(createUserRouter);
app.use(loginUserRouter);
app.use(listUserRouter);
app.use(authTokenRoute);
app.use(updateUserRouter);
app.use(deleteUserRouter);

app.use(createTransactionsRoute);
app.use(listTransactionsRoute)


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "msg": "Hello :) this is my first API",
    "using": {
        "prisma": "It's an ORM",
        "node": "TypeScript and Express",
        "database": "SQL and PostgreSQL",
        "security": "JWT, bcrypt, validations and authentication"
    }
  });
});


