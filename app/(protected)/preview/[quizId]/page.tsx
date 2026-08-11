import PreviewTopBar from '@/components/preview/PreviewTopBar';
import { QuizContent } from '@/components/preview/QuizContent';
import type { Question, QuizForEditor } from '@/types/props';
import { getQuizById } from '@/services/quizz.service';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const quizData = await getQuizById(quizId, true, false);

  if (!quizData) {
    return <div>Quiz not found</div>;
  }

  const quiz = quizData as QuizForEditor;
  const questionsWithAnswers: Question[] = (quiz.questions ?? []).map(
    (question) => ({
      ...question,
      answers:
        'answers' in question && Array.isArray(question.answers)
          ? question.answers
          : [],
    }),
  );

  return (
    <div className="">
      <PreviewTopBar questionCount={questionsWithAnswers.length} {...quiz} />
      <div className="w-full flex flex-col gap-3 px-3 md:px-6 py-3 md:py-6">
        <QuizContent questions={questionsWithAnswers} />
      </div>
    </div>
  );
}
