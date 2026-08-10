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
  initialTitle = '',
  initialDescription = '',
  initialDifficulty = '',
  initialSelectedCategories = [],
  isEditMode = false,
}: QuizBaseInputSectionProps) => {
  return (
    <div className="w-full flex flex-col gap-6 order-first bg-white p-6 rounded-md shadow-sm border border-gray-200 md:order-none h-fit">
      <SectionTitle title={CONTENT.create.base.section_title} />
      <LabelInputArea label={CONTENT.create.base.title.label}>
        <AutoResizeTextarea
          name="title"
          placeholder={CONTENT.create.base.title.placeholder}
          initValue={initialTitle}
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.create.base.description.label}>
        <AutoResizeTextarea
          name="description"
          placeholder={CONTENT.create.base.description.placeholder}
          initValue={initialDescription}
        />
      </LabelInputArea>
      <DifficultySelect initialValue={initialDifficulty} />
      <CategorySelectClient
        categories={categories}
        initialSelectedNames={initialSelectedCategories}
      />
      <QuestionControlSection
        onAddQuestion={onAddQuestion}
        isEditMode={isEditMode}
      />
    </div>
  );
};
