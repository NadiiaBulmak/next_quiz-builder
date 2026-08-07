'use client';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CONTENT } from '@/constants/content';
import { LabelInputArea } from '../UI/LabelInputArea';
import AutoResizeTextarea from '../UI/AutoResizeTextarea';
import DifficultySelect from './DifficultySelect';
import { QuestionControlSection } from './QuestionControlSection';
import { QuizBaseInputSectionProps } from '@/types/props';
import CategorySelectClient from './CategorySelectClient';

export const QuizBaseInputSection = ({
  onAddQuestion,
  categories,
}: QuizBaseInputSectionProps) => {
  return (
    <div className="w-full flex flex-col gap-6 order-first bg-white p-6 rounded-md shadow-sm border border-gray-200 md:order-none">
      <SectionTitle title={CONTENT.create.base.section_title} />
      <LabelInputArea label={CONTENT.create.base.title.label}>
        <AutoResizeTextarea
          name="title"
          placeholder={CONTENT.create.base.title.placeholder}
          initValue=""
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.create.base.description.label}>
        <AutoResizeTextarea
          name="description"
          placeholder={CONTENT.create.base.description.placeholder}
          initValue=""
        />
      </LabelInputArea>
      <DifficultySelect />
      <CategorySelectClient categories={categories} />
      <QuestionControlSection onAddQuestion={onAddQuestion} />
    </div>
  );
};
