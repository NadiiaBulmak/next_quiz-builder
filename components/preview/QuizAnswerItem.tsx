import { Circle } from 'lucide-react';
import type { QuizAnswerItemProps } from '@/types/props';

export const QuizAnswerItem = ({ text, index }: QuizAnswerItemProps) => {
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
