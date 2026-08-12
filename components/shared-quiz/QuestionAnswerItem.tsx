import { Circle, CircleCheck } from 'lucide-react';
import { QuizAnswer } from '@/types/quiz';

export const QuestionAnswerItem = ({ answer, handleAnswerSelect, isAnswerSelected }: { answer: QuizAnswer, handleAnswerSelect: (answerId: string) => void, isAnswerSelected: boolean }) => {
  return (
    <div
      key={answer.id}
      className={`flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer ${isAnswerSelected ? 'bg-lime-100 border-lime-500' : ''}`}
      onClick={() => handleAnswerSelect(answer.id)}
    >
      <CircleCheck width={20} height={20} className={`text-lime-500 ${isAnswerSelected ? '' : 'hidden'}`} />
      <Circle width={20} height={20} className={`text-gray-400 ${isAnswerSelected ? 'hidden' : ''}`} />
      {answer.text}
    </div>
  );
};
