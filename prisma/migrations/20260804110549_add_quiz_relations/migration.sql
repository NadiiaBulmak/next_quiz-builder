/*
  Warnings:

  - Added the required column `order` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficultyId` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_authorId_fkey";

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "difficultyId" TEXT NOT NULL,
ADD COLUMN     "estimatedTime" INTEGER,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Difficulty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Difficulty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "correctAnswers" INTEGER NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "quizId" TEXT NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToQuiz" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CategoryToQuiz_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Difficulty_name_key" ON "Difficulty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Difficulty_slug_key" ON "Difficulty"("slug");

-- CreateIndex
CREATE INDEX "_CategoryToQuiz_B_index" ON "_CategoryToQuiz"("B");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToQuiz" ADD CONSTRAINT "_CategoryToQuiz_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToQuiz" ADD CONSTRAINT "_CategoryToQuiz_B_fkey" FOREIGN KEY ("B") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;
