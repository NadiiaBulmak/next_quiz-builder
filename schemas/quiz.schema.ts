import * as z from 'zod';
import { CONTENT } from '@/constants/content';
import { QuizFormField, QuizQuestionField } from '@/constants/formFields';

const QuizAnswerSchema = z.object({
  [QuizQuestionField.TEXT]: z
    .string()
    .trim()
    .min(1, { error: CONTENT.create.validation.answer_text_required }),
  isCorrect: z.boolean(),
  [QuizQuestionField.ORDER]: z.number().int().positive(),
});

const QuizQuestionSchema = z
  .object({
    [QuizQuestionField.TEXT]: z
      .string()
      .trim()
      .min(1, { error: CONTENT.create.validation.question_text_required }),
    [QuizQuestionField.ORDER]: z.number().int().positive(),
    [QuizQuestionField.ANSWERS]: z.array(QuizAnswerSchema).min(2, {
      error: CONTENT.create.validation.at_least_two_answers,
    }),
  })
  .superRefine((question, ctx) => {
    const correctAnswerCount = question[QuizQuestionField.ANSWERS].filter(
      (answer) => answer.isCorrect,
    ).length;

    if (correctAnswerCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: CONTENT.create.validation.one_correct_answer,
        path: ['answers'],
      });
    }
  });

export const QuizFormSchema = z.object({
  [QuizFormField.TITLE]: z
    .string()
    .trim()
    .min(1, { error: CONTENT.create.validation.title_required }),
  [QuizFormField.DESCRIPTION]: z
    .string()
    .trim()
    .min(1, { error: CONTENT.create.validation.description_required }),
  [QuizFormField.CATEGORIES]: z.array(z.string().min(1)).min(1, {
    error: CONTENT.create.validation.select_at_least_one_category,
  }),
  [QuizFormField.DIFFICULTY]: z
    .string()
    .trim()
    .min(1, { error: CONTENT.create.validation.difficulty_required }),
  [QuizFormField.QUESTIONS]: z.array(QuizQuestionSchema).min(1, {
    error: CONTENT.create.validation.add_at_least_one_question,
  }),
});

export type QuizFormState = {
  success?: boolean;
  errors?: {
    [QuizFormField.TITLE]?: string[];
    [QuizFormField.DESCRIPTION]?: string[];
    [QuizFormField.CATEGORIES]?: string[];
    [QuizFormField.DIFFICULTY]?: string[];
    [QuizFormField.QUESTIONS]?: string[];
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
