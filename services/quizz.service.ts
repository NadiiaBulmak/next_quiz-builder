import { prisma } from "@/lib/prisma";
import { CreateQuizInput, QuizFilters, QuizSort } from "@/types/quiz";
import { getOrCreateCategories } from "./category.service";


export async function getAllQuizzes(
    query: string | null = null,
    filters: QuizFilters = {},
    sort: QuizSort = {}
) {
    return prisma.quiz.findMany({
        where: {
            ...(query && {
                title: {
                    contains: query,
                    mode: "insensitive",
                }
            }),

            ...(filters.category?.length ? {
                categories: {
                    some: {
                        slug: {
                            in: filters.category,
                        }
                    }
                }
            } : {}),

            ...(filters.difficulty && {
                difficulty: {
                    name: filters.difficulty
                }
            })
        },

        orderBy: sort,

        select: {
            id: true,
            title: true,
            description: true,
            isPublic: true,
            isPublished: true,

            author: {
                select: {
                    name: true,
                    image: true
                }
            },

            difficulty: true,
            categories: true,
        },
    });
}

export async function getQuizByUserId(userId: string, extended: boolean = false, results: boolean = false) {
    const countSelection = !extended || !results ? {
        _count: {
            select: {
                ...(extended ? {} : { questions: true }),
                ...(results ? {} : { results: true }),
            }
        }
    } : {};

    return prisma.quiz.findMany({
        where: {
            authorId: userId,
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
            ...(extended ? {
                questions: {
                    select: {
                        id: true,
                        text: true,
                        answers: {
                            select: {
                                id: true,
                                text: true,
                                isCorrect: true,
                            }
                        }
                    }
                }
            } : {}),
            ...(results ? {
                results: {
                    select: {
                        id: true,
                        userId: true,
                        score: true,
                        createdAt: true,
                    }
                }
            } : {}),
            ...countSelection,
        },
    });
}

export async function getQuizById(quizId: string, extended: boolean = false, results: boolean = false) {
    const countSelection = !extended || !results ? {
        _count: {
            select: {
                ...(extended ? {} : { questions: true }),
                ...(results ? {} : { results: true }),
            }
        }
    } : {};

    return prisma.quiz.findUnique({
        where: {
            id: quizId,
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
            ...(extended ? {
                questions: {
                    select: {
                        id: true,
                        text: true,
                        answers: {
                            select: {
                                id: true,
                                text: true,
                                isCorrect: true,
                            }
                        }
                    }
                }
            } : {}),
            ...(results ? {
                results: {
                    select: {
                        id: true,
                        userId: true,
                        score: true,
                        createdAt: true,
                    }
                }
            } : {}),
            ...countSelection,
        }
    });
}

export async function createQuiz(data: CreateQuizInput) {
    const isPublished = data.isPublished ?? false;
    const isPublic = isPublished ? (data.isPublic ?? false) : false;

    if (!data.title.trim()) {
        throw new Error("Quiz title is required.");
    }

    if (!data.questions?.length) {
        throw new Error("A quiz must contain at least one question.");
    }

    const difficultyName = data.difficulty;
    const difficulty = await prisma.difficulty.upsert({
        where: { name: difficultyName },
        update: {},
        create: {
            name: difficultyName,
            slug: difficultyName.toLowerCase(),
        },
    });

    const categories = await getOrCreateCategories(data.categories ?? []);

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
        },
    });

    for (const category of categories) {
        await prisma.quiz.update({
            where: { id: quiz.id },
            data: {
                categories: {
                    connect: { id: category.id },
                },
            },
        });
    }

    for (const questionInput of data.questions) {
        const question = await prisma.question.create({
            data: {
                text: questionInput.text,
                order: questionInput.order,
                quizId: quiz.id,
            },
        });

        await prisma.answer.createMany({
            data: questionInput.answers.map((answer) => ({
                text: answer.text,
                isCorrect: answer.isCorrect,
                order: answer.order,
                questionId: question.id,
            })),
        });
    }

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
        updateData.isPublic = data.isPublished ? (data.isPublic ?? false) : false;
    } else if (data.isPublic !== undefined) {
        updateData.isPublic = data.isPublic;
    }
    if (data.estimatedTime !== undefined) updateData.estimatedTime = data.estimatedTime;
    if (data.categories !== undefined) {
        const categories = await getOrCreateCategories(data.categories ?? []);
        updateData.categories = {
            set: categories.map(category => ({ id: category.id })),
        };
    }
    if (data.difficulty !== undefined) {
        updateData.difficulty = {
            connectOrCreate: {
                where: {
                    name: data.difficulty
                },
                create: {
                    name: data.difficulty,
                    slug: data.difficulty.toLowerCase(),
                }
            }
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
    return await prisma.quiz.delete({ where: { id } })
}

