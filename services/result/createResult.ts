import type { CreateResultInput } from "@/types/result";
import { prisma } from "@/lib/prisma";

export const createResult = async ({
  name,
  email,
  quizId,
  score,
  correctAnswers,
  totalQuestions,
  answerResults,
}: CreateResultInput) => {
  return prisma.result.create({
    data: {
      name,
      email,
      quizId,

      score,
      correctAnswers,
      totalQuestions,

      answers: {
        create: answerResults,
      },
    },
    include: {
      answers: true,
    },
  });
};