import type { Question } from '@/types/props';
import { Circle } from 'lucide-react';
import { QuizQuestionHeader } from './QuizQuestionHeader';

export const QuizQuestion = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  return (
    <div className="w-full md:max-w-[75%] lg:max-w-1/2 mx-auto bg-white border border-gray-200 shadow-md rounded-md flex flex-col gap-3">
      <div key={index} className="p-4">
        <QuizQuestionHeader text={question.text} index={index} />
        <div className="flex flex-col gap-2 mt-2">
          {question.answers.map((answer, answerIndex) => (
            <div
              key={answerIndex}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Circle />
                {answer.text}
              </div>
              {/* {answer.isCorrect && <Circle />} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
