export enum Difficulty {
    Beginner = 'Beginner',
    Elementary = 'Elementary',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Mixed = 'Mixed',
}

export type BadgePropsType = {
    difficultyName: Difficulty | string;
}

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

    categories?: string[];
    difficulty: Difficulty;

    imageUrl?: string;
    isPublished?: boolean;
    isPublic?: boolean;
    estimatedTime?: number;

    authorId: string;

    questions: QuestionInput[];
};

export type QuizFilters = {
    category?: string[];
    difficulty?: string;
};

export type QuizSort = Record<string, "asc" | "desc">;

export type QuizListItemType = {
    id: string;
    title: string;
    description: string | null;
    isPublished: boolean;
    isPublic: boolean;
    author: {
        name: string | null;
        image: string | null;
    };
    categories: {
        id: string;
        name: string;
        slug: string;
    }[];
    difficulty: {
        id: string;
        name: string;
    };
    updatedAt: Date;
    _count: {
        questions: number;
    };
};