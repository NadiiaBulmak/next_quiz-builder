'use server';

import { prisma } from '@/lib/prisma';
import {
  CreateQuizInput,
  QuizFilters,
  QuizSort,
  QuizListItemType,
} from '@/types/quiz';
import { getOrCreateCategories } from './category.service';
import { getCurrentUser } from './auth';

const QUIZ_PAGE_SIZE = 6;

type QuizPagination = {
  page: number;
  pageSize?: number;
};

export async function getAllQuizzes(
  query: string | null = null,
  filters: QuizFilters = {},
  sort: QuizSort = {},
  pagination?: QuizPagination,
): Promise<QuizListItemType[]> {
  return prisma.quiz.findMany({
    where: {
      ...(query && {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive' as const,
            },
          },
        ],
      }),

      ...(filters.category?.length
        ? {
            categories: {
              some: {
                slug: {
                  in: filters.category,
                },
              },
            },
          }
        : {}),

      ...(filters.difficulty && {
        difficulty: {
          name: filters.difficulty,
        },
      }),
      ...(filters.isPublished !== undefined && {
        isPublished: filters.isPublished,
      }),
    },

    orderBy: sort,
    ...(pagination && {
      skip:
        (Math.max(pagination.page, 1) - 1) *
        (pagination.pageSize || QUIZ_PAGE_SIZE),
      take: pagination.pageSize || QUIZ_PAGE_SIZE,
    }),

    select: {
      id: true,
      title: true,
      description: true,
      isPublic: true,
      isPublished: true,
      updatedAt: true,

      author: {
        select: {
          name: true,
          image: true,
        },
      },

      difficulty: true,
      categories: true,
      _count: {
        select: {
          questions: true,
        },
      },
    },
  });
}

export async function getAllMyQuizzes(
  extended: boolean = false,
  results: boolean = false,
  filters: QuizFilters = {},
  pagination?: QuizPagination,
  searchQuery: string | null = null,
  sort: QuizSort = {},
): Promise<QuizListItemType[]> {
  const { id: userId } = await getCurrentUser();
  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: userId,
      ...(searchQuery?.trim() && {
        OR: [
          {
            title: {
              contains: searchQuery.trim(),
              mode: 'insensitive' as const,
            },
          },
          {
            description: {
              contains: searchQuery.trim(),
              mode: 'insensitive' as const,
            },
          },
        ],
      }),
      ...(filters.category?.length
        ? {
            categories: {
              some: {
                slug: {
                  in: filters.category,
                },
              },
            },
          }
        : {}),
      ...(filters.difficulty && {
        difficulty: {
          name: filters.difficulty,
        },
      }),
      ...(filters.isPublished !== undefined && {
        isPublished: filters.isPublished,
      }),
    },
    orderBy: sort,
    ...(pagination && {
      skip:
        (Math.max(pagination.page, 1) - 1) *
        (pagination.pageSize || QUIZ_PAGE_SIZE),
      take: pagination.pageSize || QUIZ_PAGE_SIZE,
    }),
    select: {
      id: true,
      title: true,
      description: true,
      isPublic: true,
      isPublished: true,
      difficulty: true,
      categories: true,
      updatedAt: true,
      author: {
        select: {
          name: true,
          image: true,
        },
      },
      _count: {
        select: {
          questions: true,
        },
      },
      ...(extended
        ? {
            questions: {
              select: {
                id: true,
                text: true,
                answers: {
                  select: {
                    id: true,
                    text: true,
                    isCorrect: true,
                    order: true,
                  },
                },
              },
            },
          }
        : {}),
      ...(results
        ? {
            results: {
              select: {
                id: true,
                name: true,
                email: true,
                score: true,
                correctAnswers: true,
                totalQuestions: true,
                finishedAt: true,
              },
            },
          }
        : {}),
    },
  });

  return quizzes as unknown as QuizListItemType[];
}

export async function getAllMyQuizzesPaginated(
  searchQuery: string | null = null,
  filters: QuizFilters = {},
  sort: QuizSort = {},
  page = 1,
) {
  const { id: userId } = await getCurrentUser();
  const normalizedSearchQuery = searchQuery?.trim() || null;

  const where = {
    authorId: userId,

    ...(normalizedSearchQuery && {
      OR: [
        {
          title: {
            contains: normalizedSearchQuery,
            mode: 'insensitive' as const,
          },
        },
        {
          description: {
            contains: normalizedSearchQuery,
            mode: 'insensitive' as const,
          },
        },
      ],
    }),

    ...(filters.category?.length
      ? {
          categories: {
            some: {
              slug: {
                in: filters.category,
              },
            },
          },
        }
      : {}),

    ...(filters.difficulty && {
      difficulty: {
        name: filters.difficulty,
      },
    }),

    ...(filters.isPublished !== undefined && {
      isPublished: filters.isPublished,
    }),
  };

  const totalQuizzes = await prisma.quiz.count({ where });

  const pageSize = QUIZ_PAGE_SIZE;
  const totalPages = Math.ceil(totalQuizzes / pageSize);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  const quizzes = await getAllMyQuizzes(
    false,
    false,
    filters,
    {
      page: currentPage,
      pageSize,
    },
    normalizedSearchQuery,
    sort,
  );

  return {
    quizzes,
    totalQuizzes,
    totalPages,
    currentPage,
  };
}

export async function getAllQuizzesPaginated(
  searchQuery: string | null = null,
  filters: QuizFilters = {},
  sort: QuizSort = {},
  page = 1,
) {
  const normalizedSearchQuery = searchQuery?.trim() || null;

  const where = {
    ...(normalizedSearchQuery && {
      OR: [
        {
          title: {
            contains: normalizedSearchQuery,
            mode: 'insensitive' as const,
          },
        },
        {
          description: {
            contains: normalizedSearchQuery,
            mode: 'insensitive' as const,
          },
        },
      ],
    }),

    ...(filters.category?.length
      ? {
          categories: {
            some: {
              slug: {
                in: filters.category,
              },
            },
          },
        }
      : {}),

    ...(filters.difficulty && {
      difficulty: {
        name: filters.difficulty,
      },
    }),

    ...(filters.isPublished !== undefined && {
      isPublished: filters.isPublished,
    }),
  };

  const totalQuizzes = await prisma.quiz.count({ where });

  const pageSize = QUIZ_PAGE_SIZE;
  const totalPages = Math.ceil(totalQuizzes / pageSize);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  const quizzes = await getAllQuizzes(normalizedSearchQuery, filters, sort, {
    page: currentPage,
    pageSize,
  });

  return {
    quizzes,
    totalPages,
    currentPage,
    totalQuizzes,
  };
}

export async function getQuizByUserId(
  userId: string,
  extended: boolean = false,
  results: boolean = false,
  filters: QuizFilters = {},
) {
  const countSelection =
    !extended || !results
      ? {
          _count: {
            select: {
              ...(extended ? {} : { questions: true }),
              ...(results ? {} : { results: true }),
            },
          },
        }
      : {};

  return prisma.quiz.findMany({
    where: {
      authorId: userId,
      ...(filters.isPublished !== undefined && {
        isPublished: filters.isPublished,
      }),
    },
    select: {
      id: true,
      title: true,
      description: true,
      isPublic: true,
      isPublished: true,
      difficulty: true,
      categories: true,
      createdAt: true,
      updatedAt: true,
      ...(extended
        ? {
            questions: {
              select: {
                id: true,
                text: true,
                answers: {
                  select: {
                    id: true,
                    text: true,
                    isCorrect: true,
                    order: true,
                  },
                },
              },
            },
          }
        : {}),
      ...(results
        ? {
            results: {
              select: {
                id: true,
                name: true,
                email: true,
                score: true,
                correctAnswers: true,
                totalQuestions: true,
                finishedAt: true,
              },
            },
          }
        : {}),
      ...countSelection,
    },
  });
}

export async function getQuizById(
  quizId: string,
  extended: boolean = false,
  results: boolean = false,
  filters: QuizFilters = {},
) {
  const countSelection =
    !extended || !results
      ? {
          _count: {
            select: {
              ...(extended ? {} : { questions: true }),
              ...(results ? {} : { results: true }),
            },
          },
        }
      : {};

  return prisma.quiz.findUnique({
    where: {
      id: quizId,
      ...(filters.isPublished !== undefined && {
        isPublished: filters.isPublished,
      }),
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      isPublic: true,
      isPublished: true,
      difficulty: true,
      categories: true,
      ...(extended
        ? {
            questions: {
              select: {
                id: true,
                text: true,
                answers: {
                  select: {
                    id: true,
                    text: true,
                    isCorrect: true,
                    order: true,
                  },
                },
              },
            },
          }
        : {}),
      ...(results
        ? {
            results: {
              select: {
                id: true,
                name: true,
                email: true,
                score: true,
                correctAnswers: true,
                totalQuestions: true,
                finishedAt: true,
              },
            },
          }
        : {}),
      ...countSelection,
    },
  });
}

export const getQuizForResult = async (quizId: string) => {
  return prisma.quiz.findFirst({
    where: {
      id: quizId,
      isPublished: true,
      isPublic: true,
    },
    select: {
      id: true,
      questions: {
        select: {
          id: true,
          text: true,
          answers: {
            select: {
              id: true,
              text: true,
              isCorrect: true,
            },
          },
        },
      },
    },
  });
};

export async function createQuiz(data: CreateQuizInput) {
  const isPublished = data.isPublished ?? false;
  const isPublic = isPublished ? (data.isPublic ?? true) : false;

  if (!data.title.trim()) {
    throw new Error('Quiz title is required.');
  }

  if (!data.questions?.length) {
    throw new Error('A quiz must contain at least one question.');
  }

  const difficulty = await prisma.difficulty.findUnique({
    where: {
      name: data.difficulty,
    },
  });

  if (!difficulty) {
    throw new Error(
      `Difficulty "${data.difficulty}" does not exist.`,
    );
  }

  const categories = await getOrCreateCategories(
    data.categories ?? [],
  );

  const quiz = await prisma.quiz.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      isPublished,
      isPublic,
      estimatedTime: data.estimatedTime,
      authorId: data.authorId,
      difficultyId: difficulty.id,

      categories: {
        connect: categories.map((category) => ({
          id: category.id,
        })),
      },

      questions: {
        create: data.questions.map((question) => ({
          text: question.text,
          order: question.order,

          answers: {
            create: question.answers.map((answer) => ({
              text: answer.text,
              isCorrect: answer.isCorrect,
              order: answer.order,
            })),
          },
        })),
      },
    },
  });

  return quiz;
}

export async function updateQuiz(id: string, data: Partial<CreateQuizInput>) {
  const updateData: Record<string, unknown> = {};

  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.imageUrl !== undefined) {
    updateData.imageUrl = data.imageUrl;
  }
  if (data.isPublished !== undefined) {
    updateData.isPublished = data.isPublished;
    updateData.isPublic = data.isPublished ? (data.isPublic ?? true) : false;
  } else if (data.isPublic !== undefined) {
    updateData.isPublic = data.isPublic;
  }
  if (data.estimatedTime !== undefined)
    updateData.estimatedTime = data.estimatedTime;
  if (data.categories !== undefined) {
    const categories = await getOrCreateCategories(data.categories ?? []);
    updateData.categories = {
      set: categories.map((category) => ({ id: category.id })),
    };
  }
  if (data.difficulty !== undefined) {
    updateData.difficulty = {
      connectOrCreate: {
        where: {
          name: data.difficulty,
        },
        create: {
          name: data.difficulty,
          slug: data.difficulty.toLowerCase(),
        },
      },
    };
  }
  if (data.authorId !== undefined) {
    updateData.author = {
      connect: { id: data.authorId },
    };
  }
  if (data.questions !== undefined) {
    updateData.questions = {
      deleteMany: {},
      create: data.questions.map((question) => ({
        text: question.text,
        order: question.order,
        answers: {
          create: question.answers.map((answer) => ({
            text: answer.text,
            isCorrect: answer.isCorrect,
            order: answer.order,
          })),
        },
      })),
    };
  }

  return await prisma.quiz.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteQuiz(id: string) {
  await prisma.$transaction(async (transaction) => {
    const quiz = await transaction.quiz.findUnique({
      where: { id },
      select: {
        categories: {
          select: { id: true },
        },
      },
    });

    if (!quiz) {
      throw new Error('Quiz not found');
    }

    await transaction.quiz.delete({ where: { id } });

    await transaction.category.deleteMany({
      where: {
        id: { in: quiz.categories.map((category) => category.id) },
        quizzes: { none: {} },
      },
    });
  });
}

export async function duplicateQuiz(id: string) {
  const originalQuiz = await prisma.quiz.findUnique({
    where: { id },
    include: {
      difficulty: true,
      categories: true,
      questions: {
        include: {
          answers: true,
        },
        orderBy: { order: 'asc' },
      },
    },
  });

  if (!originalQuiz) {
    throw new Error('Quiz not found');
  }

  const { id: userId } = await getCurrentUser();

  const duplicatedQuiz = await prisma.quiz.create({
    data: {
      title: `${originalQuiz.title} (copy)`,
      description: originalQuiz.description,
      isPublic: originalQuiz.isPublic,
      isPublished: false,
      author: {
        connect: { id: userId },
      },
      difficulty: {
        connect: { id: originalQuiz.difficulty.id },
      },
      categories: {
        connect: originalQuiz.categories.map((c) => ({ id: c.id })),
      },
      questions: {
        create: (originalQuiz.questions ?? []).map((q) => ({
          text: q.text,
          order: q.order,
          answers: {
            create: (q.answers ?? []).map((a) => ({
              text: a.text,
              isCorrect: a.isCorrect,
              order: a.order,
            })),
          },
        })),
      },
    },
  });

  return duplicatedQuiz;
}

export async function switchIsPublished(quizId: string, isPublished: boolean) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    select: { isPublished: true },
  });

  if (!quiz) {
    throw new Error('Quiz not found');
  }

  if (quiz.isPublished === isPublished) {
    return quiz;
  }

  return prisma.quiz.update({
    where: { id: quizId },
    data: {
      isPublished,
      isPublic: isPublished,
    },
  });
}
