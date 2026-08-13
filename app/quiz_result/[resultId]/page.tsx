import { SharedQuizTopContent } from '@/components/shared-quiz/SharedQuizTopContent';
import { CONTENT } from '@/constants/content';
import QuizResultContent from '@/components/quiz-result/QuizResultContent';
import { getResult } from '@/services/result/getQuizForResult';

export default async function ResultPage({
  params,
}: {
  params: Promise<{ resultId: string }>;
}) {
  const { resultId } = await params;
  const result = await getResult(resultId);

  return (
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      <SharedQuizTopContent />

      {result ? (
        <QuizResultContent
          resultId={result.id}
          title={result.quiz.title}
          description={result.quiz.description}
          questions={result.quiz.questions}
          difficulty={result.quiz.difficulty}
          categories={result.quiz.categories}
          recipient={{ email: result.email, name: result.name }}
          score={result.score}
          correctAnswers={result.correctAnswers}
          totalQuestions={result.totalQuestions}
          answers={result.answers}
          finishedAt={result.finishedAt}
        />
      ) : (
        <div>{CONTENT.common.quiz_not_found}</div>
      )}
    </div>
  );
}
