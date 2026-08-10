'use server';

import { NAV_LINKS } from '@/constants/nav_links';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/services/auth';
import { deleteQuiz, duplicateQuiz, switchIsPublished } from '@/services/quizz.service';
import { revalidatePath } from 'next/cache';

async function assertQuizOwnership(quizId: string, userId: string) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    select: { authorId: true },
  });

  if (!quiz) {
    throw new Error('Quiz not found');
  }

  if (quiz.authorId !== userId) {
    throw new Error('Forbidden');
  }
}

export async function deleteQuizAction(quizId: string) {
  const user = await getCurrentUser();

  await assertQuizOwnership(quizId, user.id);
  await deleteQuiz(quizId);

  revalidatePath(NAV_LINKS.quizzes.my);
}

export async function duplicateQuizAction(quizId: string) {
  const user = await getCurrentUser();

  await assertQuizOwnership(quizId, user.id);
  await duplicateQuiz(quizId);

  revalidatePath(NAV_LINKS.quizzes.my);
}

export async function switchIsPublishedAction(quizId: string, isPublished: boolean) {
  const user = await getCurrentUser();
  await assertQuizOwnership(quizId, user.id);
  await switchIsPublished(quizId, !isPublished);

  revalidatePath(NAV_LINKS.quizzes.my);
}