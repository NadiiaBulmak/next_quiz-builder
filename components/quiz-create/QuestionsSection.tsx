'use client';

import { QuestionList } from './QuestionList';
import { QuestionControlSectionType } from '@/types/props';

export const QuestionsSection = ({
  questions,
  onDeleteQuestion,
  onReorderQuestions,
  onUpdateQuestionText,
  onUpdateQuestionAnswers,
}: Omit<QuestionControlSectionType, 'onAddQuestion'>) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <QuestionList
        questions={questions}
        onDeleteQuestion={onDeleteQuestion}
        onReorderQuestions={onReorderQuestions}
        onUpdateQuestionText={onUpdateQuestionText}
        onUpdateQuestionAnswers={onUpdateQuestionAnswers}
      />
    </div>
  );
};
