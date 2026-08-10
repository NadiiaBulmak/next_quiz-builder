import { CreateQuizClient } from '@/components/quiz-create/CreateQuizClient';
import { getQuizById } from '@/services/quizz.service';
import { notFound } from 'next/navigation';
import { getCathegories } from '@/services/category.service';

export default async function EditPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;

  const quiz = await getQuizById(quizId, true, false);
  const categories = await getCathegories();

  if (!quiz) {
    notFound();
  }

  // const { title } = quiz;
  return <CreateQuizClient quiz={quiz} categories={categories} />;
}
