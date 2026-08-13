import { ResultStat } from './ResultStat';
import { CONTENT } from '@/constants/content';

export const ResultStats = ({
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
  questions,
  finishedAt,
}: {
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  questions: any[];
  finishedAt: Date;
}) => (
  <div className="grid grid-cols-2 gap-3">
    <ResultStat
      label={CONTENT.quiz_result.summary.correct_answers}
      value={`${correctAnswers}/${totalQuestions}`}
    />

    <ResultStat
      label={CONTENT.quiz_result.summary.incorrect_answers}
      value={String(incorrectAnswers)}
    />

    <ResultStat
      label={CONTENT.quiz_result.summary.questions}
      value={String(questions.length)}
    />

    <ResultStat
      label={CONTENT.quiz_result.summary.completed}
      value={finishedAt.toLocaleDateString()}
    />
  </div>
);
