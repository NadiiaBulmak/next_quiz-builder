import { getQuizById } from '@/services/quizz.service';
import SharedQuizContent from '@/components/shared-quiz/SharedQuizContent';
import { SharedQuizTopContent } from '@/components/shared-quiz/SharedQuizTopContent';

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
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      {/* <PreviewTopBar questionCount={quiz.questions.length} {...quiz} /> */}
      <SharedQuizTopContent />
      {quiz ? <SharedQuizContent {...quiz} /> : <div>Quiz not found</div>}
    </div>
  );
}
