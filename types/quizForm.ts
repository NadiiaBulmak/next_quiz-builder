export type QuizQuestionPayload = {
  text: string;
  order: number;
  answers: {
    text: string;
    isCorrect: boolean;
    order: number;
  }[];
};
