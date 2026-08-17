'use server';

import { revalidatePath } from 'next/cache';
import { QUIZ_INTENTS } from '@/constants/quiz';
import { NAV_LINKS } from '@/constants/nav_links';
import { getCurrentUser } from '@/services/auth';
import { createQuiz, updateQuiz } from '@/services/quizz.service';
import { QuizFormSchema, type QuizFormState } from '@/schemas/quiz.schema';
import type { CreateQuizInput, Difficulty } from '@/types/quiz';
import { parseJsonField } from '@/utils/parseJsonField.util';
import { CONTENT } from '@/constants/content';
import { QuizFormField } from '@/constants/formFields';

export async function postQuiz(
  _state: QuizFormState,
  formData: FormData,
): Promise<QuizFormState> {
  const intent = formData.get(QuizFormField.INTENT);
  const submitIntent =
    intent === QUIZ_INTENTS.DRAFT
      ? QUIZ_INTENTS.DRAFT
      : intent === QUIZ_INTENTS.PATCH
        ? QUIZ_INTENTS.PATCH
        : QUIZ_INTENTS.SAVE;
  const title = formData.get(QuizFormField.TITLE);
  const description = formData.get(QuizFormField.DESCRIPTION);
  const difficulty = formData.get(QuizFormField.DIFFICULTY);
  const quizId = formData.get(QuizFormField.QUIZ_ID);
  const categories = parseJsonField<string[]>(formData.get(QuizFormField.CATEGORIES)) ?? [];
  const questions =
    parseJsonField<CreateQuizInput['questions']>(formData.get(QuizFormField.QUESTIONS)) ??
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

    if (submitIntent === QUIZ_INTENTS.PATCH) {
      if (typeof quizId !== 'string' || !quizId) {
        return {
          message: CONTENT.create.messages.quiz_id_required_for_update,
          user: validatedFields.data,
        };
      }

      await updateQuiz(quizId, quizPayload);

      revalidatePath(`${NAV_LINKS.edit}/${quizId}`);
      revalidatePath(`${NAV_LINKS.preview}/${quizId}`);
      revalidatePath(`${NAV_LINKS.quiz}/${quizId}`);
    } else {
      await createQuiz({
        ...quizPayload,
        isPublished: submitIntent === QUIZ_INTENTS.SAVE,
      });
    }

    revalidatePath(NAV_LINKS.quizzes.my);
    revalidatePath(NAV_LINKS.quizzes.all);
  } catch {

    return {
      message:
        submitIntent === QUIZ_INTENTS.PATCH
          ? CONTENT.create.messages.failed_to_update
          : CONTENT.create.messages.failed_to_create,
      user: validatedFields.data,
    };
  }

  return {
    success: true,
    message: CONTENT.create.messages.quiz_data_valid,
    user: validatedFields.data,
  };
}
