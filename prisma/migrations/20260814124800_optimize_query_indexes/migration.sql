-- DropIndex
DROP INDEX "Answer_order_idx";

-- DropIndex
DROP INDEX "Question_order_idx";

-- DropIndex
DROP INDEX "Question_quizId_idx";

-- DropIndex
DROP INDEX "Quiz_authorId_idx";

-- DropIndex
DROP INDEX "Quiz_isPublished_isPublic_idx";

-- CreateIndex
CREATE INDEX "AnswerResult_resultId_idx" ON "AnswerResult"("resultId");

-- CreateIndex
CREATE INDEX "AnswerResult_questionId_idx" ON "AnswerResult"("questionId");

-- CreateIndex
CREATE INDEX "AnswerResult_answerId_idx" ON "AnswerResult"("answerId");

-- CreateIndex
CREATE INDEX "Question_quizId_order_idx" ON "Question"("quizId", "order");

-- CreateIndex
CREATE INDEX "Quiz_authorId_isPublished_idx" ON "Quiz"("authorId", "isPublished");

-- CreateIndex
CREATE INDEX "Quiz_isPublished_idx" ON "Quiz"("isPublished");

-- CreateIndex
CREATE INDEX "Result_quizId_finishedAt_idx" ON "Result"("quizId", "finishedAt");
