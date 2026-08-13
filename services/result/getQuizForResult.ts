import { prisma } from '@/lib/prisma';
import type { QuizResultOverview } from '@/types/props';

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

export const getQuizzesStatistics = async (
  userId: string,
): Promise<{
  quizzes: QuizResultOverview[];
  totalParticipants: number;
  totalQuizzes: number;
  averageScore: number;
}> => {
  const statistics = await prisma.quiz.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,

      categories: {
        select: {
          name: true,
        },
      },

      difficulty: {
        select: {
          name: true,
        },
      },

      results: {
        select: {
          id: true,
          score: true,
        },
      },

      _count: {
        select: {
          results: true,
          questions: true,
        },
      },
    },
  });

  const totalParticipants = statistics.reduce(
    (total, quiz) => total + quiz._count.results,
    0,
  );
  const totalQuizzes = statistics.length;

  const averageScore =
    statistics.reduce((total, quiz) => {
      const quizAverageScore =
        quiz._count.results > 0
          ? quiz.results.reduce((sum, result) => sum + result.score, 0) /
            quiz._count.results
          : 0;
      return total + quizAverageScore * quiz._count.results;
    }, 0) / (totalParticipants || 1);

  return {
    quizzes: statistics.map((quiz) => ({
      ...quiz,
      totalParticipants: quiz._count.results,
      questionsCount: quiz._count.questions,
      averageScore:
        quiz._count.results > 0
          ? Math.round(
              quiz.results.reduce((total, result) => total + result.score, 0) /
                quiz._count.results,
            )
          : 0,
    })),
    totalParticipants,
    totalQuizzes,
    averageScore: Math.round(averageScore),
  };
};
