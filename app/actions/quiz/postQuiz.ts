'use server';

import { NAV_LINKS } from '@/constants/nav_links';
import { getCurrentUser } from '@/services/auth';
import { createQuiz } from '@/services/quizz.service';
import { QuizFormSchema, type QuizFormState } from '@/schemas/quiz.schema';
import type { CreateQuizInput, Difficulty } from '@/types/quiz';
import { parseJsonField } from '@/utils/parseJsonField.util';
import { redirect } from 'next/navigation';

export async function postQuiz(
  _state: QuizFormState,
  formData: FormData,
): Promise<QuizFormState> {
  const intent = formData.get('intent');
  const submitIntent = intent === 'draft' ? 'draft' : 'save';
  const title = formData.get('title');
  const description = formData.get('description');
  const difficulty = formData.get('difficulty');
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

    await createQuiz({
      title: validatedFields.data.title,
      description: validatedFields.data.description,
      categories: validatedFields.data.categories,
      difficulty: validatedFields.data.difficulty as Difficulty,
      questions: validatedFields.data.questions,
      authorId: currentUser.id,
      isPublished: submitIntent === 'save',
    });
  } catch {
    return {
      message: 'Failed to create quiz. Please try again.',
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
