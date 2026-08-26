/*
  Warnings:

  - You are about to drop the column `invoices` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "invoices",
ADD COLUMN     "invoice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "balance" SET DEFAULT 0;
