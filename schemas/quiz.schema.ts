import * as z from 'zod';
import { CONTENT } from '@/constants/content';

const QuizAnswerSchema = z.object({
  text: z
    .string()
    .min(1, { error: CONTENT.create.validation.answer_text_required })
    .trim(),
  isCorrect: z.boolean(),
  order: z.number().int().positive(),
});

const QuizQuestionSchema = z
  .object({
    text: z
      .string()
      .min(1, { error: CONTENT.create.validation.question_text_required })
      .trim(),
    order: z.number().int().positive(),
    answers: z.array(QuizAnswerSchema).min(2, {
      error: CONTENT.create.validation.at_least_two_answers,
    }),
  })
  .superRefine((question, ctx) => {
    if (!question.answers.some((answer) => answer.isCorrect)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: CONTENT.create.validation.one_correct_answer,
        path: ['answers'],
      });
    }
  });

export const QuizFormSchema = z.object({
  title: z
    .string()
    .min(1, { error: CONTENT.create.validation.title_required })
    .trim(),
  description: z
    .string()
    .min(1, { error: CONTENT.create.validation.description_required })
    .trim(),
  categories: z.array(z.string().min(1)).min(1, {
    error: CONTENT.create.validation.select_at_least_one_category,
  }),
  difficulty: z
    .string()
    .min(1, { error: CONTENT.create.validation.difficulty_required })
    .trim(),
  questions: z.array(QuizQuestionSchema).min(1, {
    error: CONTENT.create.validation.add_at_least_one_question,
  }),
});

export type QuizFormState = {
  success?: boolean;
  errors?: {
    title?: string[];
    description?: string[];
    categories?: string[];
    difficulty?: string[];
    questions?: string[];
  };
  message?: string;
  user?: {
    title?: string;
    description?: string;
    categories?: string[];
    difficulty?: string;
    questions?: z.infer<typeof QuizFormSchema>['questions'];
  };
};
