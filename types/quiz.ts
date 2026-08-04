export type AnswerInput = {
    text: string;
    isCorrect: boolean;
    order: number;
}

export type QuestionInput = {
    text: string;
    order: number;
    answers: AnswerInput[];
}

export type CreateQuizInput = {
    title: string;
    description?: string;

    categoryId: string;
    difficultyId: string;

    imgUrl?: string;
    isPublished?: boolean;
    isPublic?: boolean;
    estimatedTime?: number;

    authorId: string;

    questions: QuestionInput[];
};
