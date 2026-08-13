import * as z from 'zod';
import { CONTENT } from '@/constants/content';

export const QuizResultFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ error: CONTENT.auth.validation.email_invalid }),

  name: z.string().trim(),

  quizId: z.string().min(1),

  answers: z.string().min(1),
});

export type QuizResultFormState = {
  success?: boolean;
  errors?: {
    email?: string[];
    name?: string[];
    quizId?: string[];
    answers?: string[];
  };
  message?: string;
  user?: {
    id: string;
    email: string;
  };
};

export const UserAnswerSchema = z.object({
  questionId: z.string(),
  answerId: z.string(),
});

export const UserAnswersSchema = z.array(UserAnswerSchema);
