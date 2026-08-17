'use server';

import { createResult } from '@/services/result/createResult';
import { calculateResult } from '@/services/result/calculateResult';
import {
  QuizResultFormSchema,
  QuizResultFormState,
  UserAnswersSchema,
} from '@/schemas/quiz_result.schema';
import { CONTENT } from '@/constants/content';
import { AuthFormField, QuizFormField, QuizQuestionField } from '@/constants/formFields';

export async function quizResult(
  _state: QuizResultFormState,
  formData: FormData,
): Promise<QuizResultFormState> {
  const validatedFields = QuizResultFormSchema.safeParse({
    [AuthFormField.EMAIL]: formData.get(AuthFormField.EMAIL),
    [AuthFormField.NAME]: formData.get(AuthFormField.NAME),
    [QuizFormField.QUIZ_ID]: formData.get(QuizFormField.QUIZ_ID),
    [QuizQuestionField.ANSWERS]: formData.get(QuizQuestionField.ANSWERS),
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
      message: CONTENT.quiz_result.messages.invalid_answers,
    };
  }

  const answersResult = UserAnswersSchema.safeParse(parsedAnswers);

  if (!answersResult.success) {
    return {
      message: CONTENT.quiz_result.messages.invalid_answers,
    };
  }

  try {
    const calculatedResult = await calculateResult(quizId, answersResult.data);

    const result = await createResult({
      name,
      email,
      quizId,
      ...calculatedResult,
    });

    return {
      success: true,
      message: CONTENT.quiz_result.messages.completed_successfully,
      user: {
        id: result.id,
        email: result.email,
      },
    };
  } catch (error) {
    console.error('Quiz result failed:', error);

    return {
      message: CONTENT.quiz_result.messages.unable_to_save,
    };
  }
}
