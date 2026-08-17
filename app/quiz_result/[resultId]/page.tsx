import { SharedQuizTopContent } from '@/components/shared-quiz/SharedQuizTopContent';
import { QuizResultContent } from '@/components/quiz-result/QuizResultContent';
import { getResult } from '@/services/result/getQuizForResult';
import { notFound } from 'next/navigation';
import { CONTENT } from '@/constants/content';
import type { Metadata } from 'next';
import type { ResultPageProps } from '@/types/props';

export const metadata: Metadata = CONTENT.metadata.quiz.result;

export default async function ResultPage({ params }: ResultPageProps) {
  const { resultId } = await params;
  const result = await getResult(resultId);

  if (!result) {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      <SharedQuizTopContent />

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
    </div>
  );
}
