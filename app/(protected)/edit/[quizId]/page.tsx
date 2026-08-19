import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getQuizById } from '@/services/quizz.service';
import { redirect } from 'next/navigation';
import { getCathegories } from '@/services/category.service';
import { CONTENT } from '@/constants/content';
import { QuizCreateProvider } from '@/providers/QuizCreateProvider';
import { NAV_LINKS } from '@/constants/nav_links';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.quiz.edit;

export default async function EditPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;

  const quiz = await getQuizById(quizId, true, false);
  const categories = await getCathegories();

  if (!quiz) {
    redirect(NAV_LINKS.quizzes.my);
  }

  return (
    <QuizCreateProvider>
      <CreateQuizClient quiz={quiz} categories={categories} />
    </QuizCreateProvider>
  );
}
