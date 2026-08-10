export enum Difficulty {
  Beginner = 'Beginner',
  Elementary = 'Elementary',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Mixed = 'Mixed',
}

export type BadgePropsType = {
  difficultyName: Difficulty | string;
  id?: string;
};

export type AnswerInput = {
  text: string;
  isCorrect: boolean;
  order: number;
};

export type QuestionInput = {
  text: string;
  order: number;
  answers: AnswerInput[];
};

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

export type QuizAnswer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string;
  isCorrect: boolean;
  order: number;
};

export type QuizQuestion = {
  quizId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string;
  order: number;
  answers?: QuizAnswer[];
};

export type QuizFilters = {
  category?: string[];
  difficulty?: string;
  isPublished?: boolean;
};

export type QuizSort = Record<string, 'asc' | 'desc'>;

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

export type Quiz = {
  id: string;
  title: string;
  description: string | null;
  isPublished: boolean;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  difficulty: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
  };
  questions: QuizQuestion[];
  results: {
    quizId: string;
    id: string;
    name: string | null;
    email: string;
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    finishedAt: Date;
  }[];
  _count: {
    author: number;
    categories: number;
    difficulty: number;
    questions: number;
    results: number;
  };
};
