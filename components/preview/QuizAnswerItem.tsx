import { AnswerInput } from '@/types/quiz';
import { Circle } from 'lucide-react';

export const QuizAnswerItem = ({
  text,
  index,
}: {
  text: string;
  index: number;
}) => {
  return (
    <div
      key={index}
      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
    >
      <div className="flex items-center gap-2">
        <Circle />
        {text}
      </div>
    </div>
  );
};
