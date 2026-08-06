import * as z from 'zod';

const QuizAnswerSchema = z.object({
  text: z.string().min(1, { error: 'Answer text is required.' }).trim(),
  isCorrect: z.boolean(),
  order: z.number().int().positive(),
});

const QuizQuestionSchema = z
  .object({
    text: z.string().min(1, { error: 'Question text is required.' }).trim(),
    order: z.number().int().positive(),
    answers: z.array(QuizAnswerSchema).min(2, {
      error: 'Each question must have at least two answers.',
    }),
  })
  .superRefine((question, ctx) => {
    if (!question.answers.some((answer) => answer.isCorrect)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Each question must have one correct answer.',
        path: ['answers'],
      });
    }
  });

export const QuizFormSchema = z.object({
  title: z.string().min(1, { error: 'Title is required.' }).trim(),
  description: z.string().min(1, { error: 'Description is required.' }).trim(),
  categories: z.array(z.string().min(1)).min(1, {
    error: 'Select at least one category.',
  }),
  difficulty: z.string().min(1, { error: 'Difficulty is required.' }).trim(),
  questions: z.array(QuizQuestionSchema).min(1, {
    error: 'Add at least one question.',
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
