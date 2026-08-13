import { prisma } from '@/lib/prisma';

export const getResult = async (id: string) => {
  const result = await prisma.result.findUnique({
    where: {
      id,
    },
    include: {
      quiz: {
        include: {
          categories: true,
          difficulty: true,
          questions: {
            include: {
              answers: true,
            },
          },
        },
      },
      answers: true,
    },
  });

  return result;
};

export const getResultsByQuizId = async (quizId: string) => {
  const results = await prisma.result.findMany({
    where: {
      quizId,
    },
    include: {
      quiz: true,
      answers: true,
    },
  });

  return results;
};
