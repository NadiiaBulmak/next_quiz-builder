export type UserAnswer = {
  questionId: string;
  answerId: string;
};

export type QuizQuestion = {
  id: string;
  text: string;
  answers: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
};

export type CreateResultInput = {
  name?: string;
  email: string;
  quizId: string;

  score: number;
  correctAnswers: number;
  totalQuestions: number;

  answerResults: {
    questionId: string;
    answerId: string | null;
    questionText: string;
    answerText: string;
    isCorrect: boolean;
  }[];
};