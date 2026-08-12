/*
  Warnings:

  - You are about to drop the column `created_at` on the `ResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `ResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `token_hash` on the `ResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `used_at` on the `ResetToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tokenHash]` on the table `ResetToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiresAt` to the `ResetToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenHash` to the `ResetToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ResetToken_token_hash_key";

-- AlterTable
ALTER TABLE "ResetToken" DROP COLUMN "created_at",
DROP COLUMN "expires_at",
DROP COLUMN "token_hash",
DROP COLUMN "used_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tokenHash" TEXT NOT NULL,
ADD COLUMN     "usedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "ResetToken_tokenHash_key" ON "ResetToken"("tokenHash");
