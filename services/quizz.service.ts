import { prisma } from "@/lib/prisma";
import { CreateQuizInput } from "@/types/quiz";

export async function getAllQuizzes(query: string | null = null, filters: Record<string, any> = {}, sort: Record<string, any> = {}) {
    return prisma.quiz.findMany({
        ...(query ? {
            where: {
                title: {
                    contains: query,
                    mode: "insensitive",
                },
            },
        } : {}),
        ...(filters ? {
            where: {
                category: filters.category,
                difficulty: filters.difficulty,
            }
        } : {}),
        ...(sort ? {
            orderBy: sort
        } : {}),
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
            } : {
                include: {
                    _count: {
                        select: {
                            questions: true
                        }
                    }
                }
            }),
            ...(results ? {
                results: {
                    select: {
                        id: true,
                        userId: true,
                        score: true,
                        createdAt: true,
                    }
                }
            } : {
                _count: {
                    select: {
                        results: true
                    }
                }
            })
        },
    });
}

export async function getQuizById(quizId: string, extended: boolean = false, results: boolean = false) {
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
            } : {
                _count: {
                    select: {
                        questions: true
                    }
                }
            }),
            ...(results ? {
                results: {
                    select: {
                        id: true,
                        userId: true,
                        score: true,
                        createdAt: true,
                    }
                }
            } : {
                _count: {
                    select: {
                        results: true
                    }
                }
            })
        }
    });
}

export async function createQuiz(data: CreateQuizInput) {
    return prisma.quiz.create({
        data: {
            title: data.title,
            description: data.description,
            imageUrl: data.imgUrl,
            isPublished: data.isPublished ?? false,
            isPublic: data.isPublished ?? false,
            estimatedTime: data.estimatedTime,

            author: {
                connect: {
                    id: data.authorId,
                },
            },

            difficulty: {
                connect: {
                    id: data.difficultyId,
                },
            },

            categories: {
                connect: [
                    {
                        id: data.categoryId,
                    },
                ],
            },

            questions: {
                create: data.questions.map(question => ({
                    text: question.text,
                    order: question.order,

                    answers: {
                        create: question.answers.map(answer => ({
                            text: answer.text,
                            isCorrect: answer.isCorrect,
                            order: answer.order,
                        })),
                    },
                })),
            },
        },
    });
}

export async function updateQuiz(id: string, data: Partial<CreateQuizInput>) {
    const updateData: Record<string, any> = {};

    if (data.title !== undefined) updateData.title = data.title;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.imgUrl !== undefined) updateData.imageUrl = data.imgUrl;
    if (data.isPublic !== undefined) updateData.isPublic = data.isPublic;
    if (data.isPublished !== undefined) updateData.isPublished = data.isPublished;
    if (data.estimatedTime !== undefined) updateData.estimatedTime = data.estimatedTime;
    if (data.categoryId !== undefined) {
        updateData.categories = {
            set: [{ id: data.categoryId }],
        };
    }
    if (data.difficultyId !== undefined) {
        updateData.difficulty = {
            connect: { id: data.difficultyId },
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
    await prisma.user.delete({ where: { id } })
}

