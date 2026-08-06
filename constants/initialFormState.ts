import { LoginFormState } from '@/schemas/login.schema';
import { QuizFormState } from '@/schemas/quiz.schema';
import { FormState } from '@/schemas/sign-up.schema';
import { AnswerType, QuestionType } from '@/types/props';

export const initialState: FormState = {
  errors: undefined,
  user: undefined,
};

export const loginInitialState: LoginFormState = {
  errors: undefined,
  user: undefined,
};

export const quizInitialState: QuizFormState = {
  errors: undefined,
  user: undefined,
};

export const initAnswerOptions: AnswerType[] = [
  {
    text: '1',
    isCorrect: true,
    order: 1,
  },
  {
    text: '2',
    isCorrect: false,
    order: 2,
  },
];

export const defaultAnswerOption = {
  text: '',
  isCorrect: false,
  order: 1,
};

export const initialQuestions: QuestionType[] = [
  {
    text: '',
    order: 1,
    answers: initAnswerOptions,
  },
];

export const defaultQuestion: QuestionType = {
  text: '',
  order: 1,
  answers: initAnswerOptions,
};
