import PreviewTopBar from '@/components/preview/PreviewTopBar';
import { QuizContent } from '@/components/preview/QuizContent';
import { getQuizById } from '@/services/quizz.service';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const quiz = await getQuizById(quizId, true, false);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="">
      <PreviewTopBar questionCount={quiz._count.questions} {...quiz} />
      {/* <QuizContent {...quiz} /> */}
    </div>
  );
}
