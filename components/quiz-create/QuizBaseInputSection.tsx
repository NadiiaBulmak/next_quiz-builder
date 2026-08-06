'use client';

import { CONTENT } from '@/constants/content';
import { LabelInputArea } from './LabelInputArea';
import AutoResizeTextarea from './AutoResizeTextarea';
import DifficultySelect from './DifficultySelect';
import { QuestionControlSection } from './QuestionControlSection';
import { QuizBaseInputSectionProps } from '@/types/props';
import CategorySelectClient from './CategorySelectClient';

export const QuizBaseInputSection = ({ onAddQuestion, categories }: QuizBaseInputSectionProps) => {
  return (
    <div className="w-full flex flex-col gap-3 order-first">
      <LabelInputArea label={CONTENT.create.base.title.label}>
        <AutoResizeTextarea
          placeholder={CONTENT.create.base.title.placeholder}
          initValue=''
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.create.base.description.label}>
        <AutoResizeTextarea
          placeholder={CONTENT.create.base.description.placeholder}
          initValue=''
        />
      </LabelInputArea>
      <DifficultySelect />
      <CategorySelectClient categories={categories} />
      <QuestionControlSection onAddQuestion={onAddQuestion} />
    </div>
  );
};
