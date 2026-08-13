'use server';

import { createResult } from '@/services/result/createResult';
import { calculateResult } from '@/services/result/calculateResult';
import {
  QuizResultFormSchema,
  QuizResultFormState,
  UserAnswersSchema,
} from '@/schemas/quiz_result.schema';

export async function quizResult(
  _state: QuizResultFormState,
  formData: FormData,
): Promise<QuizResultFormState> {
  const validatedFields = QuizResultFormSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    quizId: formData.get('quizId'),
    answers: formData.get('answers'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, quizId, answers } = validatedFields.data;

  let parsedAnswers: unknown;

  try {
    parsedAnswers = JSON.parse(answers);
  } catch {
    return {
      message: 'Invalid answers.',
    };
  }

  const answersResult = UserAnswersSchema.safeParse(parsedAnswers);

  if (!answersResult.success) {
    return {
      message: 'Invalid answers.',
    };
  }

  try {
    const calculatedResult = await calculateResult(
      quizId,
      answersResult.data,
    );

    const result = await createResult({
      name,
      email,
      quizId,
      ...calculatedResult,
    });

    return {
      success: true,
      message: 'Quiz completed successfully.',
      user: {
        id: result.id,
        email: result.email,
      },
    };
  } catch (error) {
    console.error('Quiz result failed:', error);

    return {
      message: 'Unable to save quiz result.',
    };
  }
}