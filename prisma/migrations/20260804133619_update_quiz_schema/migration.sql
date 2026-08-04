-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_difficultyId_fkey";

-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "difficultyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty"("id") ON DELETE SET NULL ON UPDATE CASCADE;
