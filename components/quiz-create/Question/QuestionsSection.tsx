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
    <div className="w-full flex flex-col gap-4 col-span-full md:col-span-1 md:col-start-2 md:row-start-1">
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
