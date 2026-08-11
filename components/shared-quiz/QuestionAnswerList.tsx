'use client';

import { Quiz, QuizAnswer } from '@/types/quiz';
import { Circle, CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { QuestionAnswerItem } from './QuestionAnswerItem';

export const QuestionAnswerList = ({ answers }: { answers: QuizAnswer[] }) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<string[]>([]);
  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswerId((prevSelectedAnswerId) => {
      if (prevSelectedAnswerId.includes(answerId)) {
        return prevSelectedAnswerId.filter((id) => id !== answerId);
      } else {
        return [...prevSelectedAnswerId, answerId];
      }
    });
  };

  const isAnswerSelected = (answerId: string) => {
    return selectedAnswerId.includes(answerId);
  };

  return (
    <div className="flex flex-col gap-2">
      {answers.map((answer) => (
        <QuestionAnswerItem answer={answer} key={answer.id} isAnswerSelected={isAnswerSelected(answer.id)} handleAnswerSelect={handleAnswerSelect} />
      ))}
    </div>
  );
};
