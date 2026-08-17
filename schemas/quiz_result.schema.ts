import * as z from 'zod';
import { CONTENT } from '@/constants/content';
import {
  AuthFormField,
  QuizFormField,
  QuizQuestionField,
  QuizResultFormField,
} from '@/constants/formFields';

export const QuizResultFormSchema = z.object({
  [AuthFormField.EMAIL]: z
    .string()
    .trim()
    .email({ error: CONTENT.auth.validation.email_invalid }),

  [AuthFormField.NAME]: z.string().trim(),

  [QuizFormField.QUIZ_ID]: z.string().min(1),

  [QuizQuestionField.ANSWERS]: z.string().min(1),
});

export type QuizResultFormState = {
  success?: boolean;
  errors?: {
    [AuthFormField.EMAIL]?: string[];
    [AuthFormField.NAME]?: string[];
    [QuizFormField.QUIZ_ID]?: string[];
    [QuizQuestionField.ANSWERS]?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

export const UserAnswerSchema = z.object({
  [QuizResultFormField.QUESTION_ID]: z.string(),
  [QuizResultFormField.ANSWER_ID]: z.string(),
});

export const UserAnswersSchema = z.array(UserAnswerSchema);
