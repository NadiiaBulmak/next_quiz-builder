import { QuestionResult } from './QuestionResult';
import type { QuestionResultListProps } from '@/types/props';

export const QuestionResultList = ({ answers }: QuestionResultListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {answers.map((answer, index) => (
        <QuestionResult
          key={answer.id}
          index={index + 1}
          question={answer.questionText}
          answer={answer.answerText}
          isCorrect={answer.isCorrect}
        />
      ))}
    </div>
  );
};
