import type { QuizAnswerListProps } from '@/types/props';
import { QuizAnswerItem } from './QuizAnswerItem';

export const QuizAnswerList = ({ answers }: QuizAnswerListProps) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {answers.map((answer, answerIndex) => (
        <QuizAnswerItem
          text={answer.text}
          index={answerIndex}
          key={answerIndex}
        />
      ))}
    </div>
  );
};
