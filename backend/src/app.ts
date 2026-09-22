import express, { type Express, type Request, type Response } from 'express';
import { createTransactionsRoute } from './app/routes/transactions/createTransactions.ts';
import { listTransactionsRoute } from './app/routes/transactions/listTransaction.ts';
import { allTransactionsRoute } from './app/routes/transactions/allTransactions.ts';
import userRoutes from './app/routes/users/user.routes.ts';

export const app: Express = express();

app.use(express.json());

app.use(userRoutes);

app.use(createTransactionsRoute);
app.use(listTransactionsRoute)
app.use(allTransactionsRoute)


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "msg": "Hello :) this is my first API",
    "using": {
      "prisma": "An ORM",
      "node": "TypeScript and Express",
      "database": "PostgreSQL",
      "security": "JWT, bcrypt, validation and authentication"
    },
    "learnings": [
      "Clean architecture by separating Middlewares and Controllers",
      "Domain-driven design rules for immutable financial records",
      "Database relations, schemas, and type generation with Prisma",
      "Route parameter handling and HTTP status code standards",
      "Strict TypeScript typing across API endpoints"
    ]
  });
});

