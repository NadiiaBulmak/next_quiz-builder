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
    <div className="w-full flex flex-col gap-4 col-span-full md:col-span-1 md:col-start-2 md:row-start-1 bg-white p-6 rounded-md shadow-sm border border-gray-200 h-fit">
      <SectionTitle title={CONTENT.create.base.question_section_title} subtitle={`${questions.length} ${CONTENT.create.base.question_section_subtitle}`} />
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
