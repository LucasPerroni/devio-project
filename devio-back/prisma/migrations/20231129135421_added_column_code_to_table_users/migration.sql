/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "code" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_code_key" ON "user"("code");
