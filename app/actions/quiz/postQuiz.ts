'use server';

import { NAV_LINKS } from '@/constants/nav_links';
import { getCurrentUser } from '@/services/auth';
import { createQuiz, updateQuiz } from '@/services/quizz.service';
import { QuizFormSchema, type QuizFormState } from '@/schemas/quiz.schema';
import type { CreateQuizInput, Difficulty } from '@/types/quiz';
import { parseJsonField } from '@/utils/parseJsonField.util';
import { redirect } from 'next/navigation';

export async function postQuiz(
  _state: QuizFormState,
  formData: FormData,
): Promise<QuizFormState> {
  const intent = formData.get('intent');
  const submitIntent =
    intent === 'draft' ? 'draft' : intent === 'patch' ? 'patch' : 'save';
  const title = formData.get('title');
  const description = formData.get('description');
  const difficulty = formData.get('difficulty');
  const quizId = formData.get('quizId');
  const categories = parseJsonField<string[]>(formData.get('categories')) ?? [];
  const questions =
    parseJsonField<CreateQuizInput['questions']>(formData.get('questions')) ??
    [];

  const validatedFields = QuizFormSchema.safeParse({
    title: typeof title === 'string' ? title : '',
    description: typeof description === 'string' ? description : '',
    categories,
    difficulty: typeof difficulty === 'string' ? difficulty : '',
    questions,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      user: {
        title: typeof title === 'string' ? title : '',
        description: typeof description === 'string' ? description : '',
        categories,
        difficulty: typeof difficulty === 'string' ? difficulty : '',
        questions,
      },
    };
  }

  try {
    const currentUser = await getCurrentUser();

    const quizPayload = {
      title: validatedFields.data.title,
      description: validatedFields.data.description,
      categories: validatedFields.data.categories,
      difficulty: validatedFields.data.difficulty as Difficulty,
      questions: validatedFields.data.questions,
      authorId: currentUser.id,
    } satisfies CreateQuizInput;

    if (submitIntent === 'patch') {
      if (typeof quizId !== 'string' || !quizId) {
        return {
          message: 'Quiz id is required for update.',
          user: validatedFields.data,
        };
      }

      await updateQuiz(quizId, quizPayload);
    } else {
      await createQuiz({
        ...quizPayload,
        isPublished: submitIntent === 'save',
      });
    }
  } catch {
    console.log({
      message:
        submitIntent === 'patch'
          ? 'Failed to update quiz. Please try again.'
          : 'Failed to create quiz. Please try again.',
      user: validatedFields.data,
    });
    return {
      message:
        submitIntent === 'patch'
          ? 'Failed to update quiz. Please try again.'
          : 'Failed to create quiz. Please try again.',
      user: validatedFields.data,
    };
  }

  redirect(NAV_LINKS.quizzes.my);

  return {
    success: true,
    message: 'Quiz data is valid.',
    user: validatedFields.data,
  };
}
