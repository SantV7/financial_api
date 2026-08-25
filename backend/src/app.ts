import express, { type Express, type Request, type Response } from 'express';
import { loginUserRouter } from './app/routes/users/loginUsersRouter.ts';

export const app: Express = express();

app.use(express.json());

app.use(loginUserRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "msg": "It's your first API",
    "using": {
        "prisma": "It's an ORM",
        "node": "TypeScript and Express",
        "database": "SQL and PostgreSQL"
    }
  });
});


