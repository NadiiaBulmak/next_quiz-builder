'use client';
import { CONTENT } from '@/constants/content';
import { SectionTitle } from '@/components/shared/SectionTitle';
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
    <div className="col-span-full flex h-fit w-full flex-col gap-5 rounded-md border border-gray-200 bg-white p-4 shadow-sm md:col-span-1 md:col-start-2 md:row-start-1 lg:gap-4 lg:p-6">
      <SectionTitle
        title={CONTENT.create.base.question_section_title}
        subtitle={`${questions.length} ${CONTENT.create.base.question_section_subtitle}`}
      />
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
