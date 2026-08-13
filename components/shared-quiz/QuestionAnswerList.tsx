'use client';

import { QuizAnswer } from '@/types/quiz';
import { QuestionAnswerItem } from './QuestionAnswerItem';

export const QuestionAnswerList = ({
  answers,
  questionId,
  selectedAnswerIds,
  handleAnswerSelect,
}: {
  answers: QuizAnswer[];
  questionId: string;
  selectedAnswerIds: string[];
  handleAnswerSelect: (questionId: string, selectedAnswerIds: string[]) => void;
}) => {
  const handleLocalAnswerSelect = (answerId: string) => {
    if (questionId) {
      handleAnswerSelect(questionId, [answerId]);
    }
  };

  const isAnswerSelected = (answerId: string) => {
    return selectedAnswerIds.includes(answerId);
  };

  return (
    <div className="flex flex-col gap-2">
      {answers.map((answer) => (
        <QuestionAnswerItem
          answer={answer}
          key={answer.id}
          isAnswerSelected={isAnswerSelected(answer.id)}
          handleAnswerSelect={handleLocalAnswerSelect}
        />
      ))}
    </div>
  );
};
