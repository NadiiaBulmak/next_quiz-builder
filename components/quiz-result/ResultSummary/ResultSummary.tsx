import { ResultScore } from './ResultScore';
import { ResultStats } from './ResultStats';
import type { ResultSummaryProps } from '@/types/props';

export const ResultSummary = ({
  score,
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
  questions,
  finishedAt,
}: ResultSummaryProps) => {
  return (
    <div className="grid grid-cols-1 py-6 gap-6 md:p-6 lg:grid-cols-[1fr_1fr]">
      <ResultScore score={score} />
      <ResultStats
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        totalQuestions={totalQuestions}
        questions={questions}
        finishedAt={finishedAt}
      />
    </div>
  );
};
