import type { Request, Response, NextFunction } from "express";

export const authCreateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { balance, invoice } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "User ID is required in route parameters." });
  }

  if (typeof balance !== "number" || balance < 0) {
    return res.status(400).json({ message: "Balance must be a positive number." });
  }

  if (typeof invoice !== "number" || invoice < 0) {
    return res.status(400).json({ message: "Invoice must be a positive number." });
  }

  return next();
};