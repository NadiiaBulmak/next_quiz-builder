import { prisma } from '@/lib/prisma';
import type { QuizResultOverview, QuizResultDetail } from '@/types/props';

export const RESULTS_PAGE_SIZE = 2;

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

export const getResultDetailsByQuizId = async (
  quizId: string,
  page = 1,
): Promise<{
  results: QuizResultDetail[];
  totalPages: number;
  currentPage: number;
}> => {
  const totalResults = await prisma.result.count({ where: { quizId } });
  const totalPages = Math.ceil(totalResults / RESULTS_PAGE_SIZE);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  const results = await prisma.result.findMany({
    where: { quizId },
    select: {
      id: true,
      name: true,
      email: true,
      score: true,
      correctAnswers: true,
      totalQuestions: true,
      finishedAt: true,
      answers: {
        select: {
          id: true,
          questionText: true,
          answerText: true,
          isCorrect: true,
        },
      },
      quiz: {
        select: {
          categories: { select: { name: true } },
          difficulty: { select: { name: true } },
        },
      },
    },
    orderBy: { finishedAt: 'desc' },
    skip: (currentPage - 1) * RESULTS_PAGE_SIZE,
    take: RESULTS_PAGE_SIZE,
  });

  return { results, totalPages, currentPage };
};

export const getQuizzesStatistics = async (
  userId: string,
  page = 1,
): Promise<{
  quizzes: QuizResultOverview[];
  totalParticipants: number;
  totalQuizzes: number;
  averageScore: number;
  totalPages: number;
  currentPage: number;
}> => {
  const where = { authorId: userId };
  const [statistics, totalQuizzes, participantStats] = await Promise.all([
    prisma.quiz.findMany({
      where,
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
      skip: (Math.max(page, 1) - 1) * RESULTS_PAGE_SIZE,
      take: RESULTS_PAGE_SIZE,
    }),
    prisma.quiz.count({ where }),
    prisma.result.aggregate({
      where: { quiz: where },
      _count: true,
      _avg: { score: true },
    }),
  ]);

  const totalPages = Math.ceil(totalQuizzes / RESULTS_PAGE_SIZE);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  if (currentPage !== Math.max(page, 1)) {
    return getQuizzesStatistics(userId, currentPage);
  }

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
    totalParticipants: participantStats._count,
    totalQuizzes,
    averageScore: Math.round(participantStats._avg.score || 0),
    totalPages,
    currentPage,
  };
};

export const getQuizStatisticById = async (
  quizId: string,
): Promise<{
  quiz: QuizResultOverview;
  totalParticipants: number;
  averageScore: number;
}> => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
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

  if (!quiz) {
    throw new Error('Quiz not found');
  }

  const totalParticipants = quiz._count.results;

  const averageScore =
    totalParticipants > 0
      ? Math.round(
          quiz.results.reduce((sum, result) => sum + result.score, 0) /
            totalParticipants,
        )
      : 0;

  return {
    quiz: {
      ...quiz,
      totalParticipants,
      questionsCount: quiz._count.questions,
      averageScore,
    },
    totalParticipants,
    averageScore,
  };
};
