import { ResultScore } from './ResultScore';
import { ResultStats } from './ResultStats';

export const ResultSummary = ({
  score,
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
  questions,
  finishedAt,
}: {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  questions: any[];
  finishedAt: Date;
}) => {
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
