import { LoginFormState } from '@/schemas/login.schema';
import { FormState } from '@/schemas/sign-up.schema';
import { QuestionType } from '@/types/props';

export const initialState: FormState = {
  errors: undefined,
  user: undefined,
};

export const loginInitialState: LoginFormState = {
  errors: undefined,
  user: undefined,
};

export const defaultQuestion: QuestionType = {
  text: '',
  order: 1,
  answers: [
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
  ],
};

export const initialQuestions: QuestionType[] = [
  {
    text: '',
    order: 1,
    answers: [
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
    ],
  },
];
