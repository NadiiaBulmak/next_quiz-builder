'use client';

import { CONTENT } from '@/constants/content';
import { LabelInputArea } from './LabelInputArea';
import AutoResizeTextarea from './AutoResizeTextarea';
import DifficultySelect from './DifficultySelect';
import CategorySelectClient, { type Category } from './CategorySelectClient';
import { QuestionControlSection } from './QuestionControlSection';
import { QuestionControlSectionType } from '@/types/props';

type Props = Partial<QuestionControlSectionType> & {
  categories: Category[];
};

export const QuizBaseInputSection = ({ onAddQuestion, categories }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <LabelInputArea label={CONTENT.create.base.title.label}>
        <AutoResizeTextarea
          placeholder={CONTENT.create.base.title.placeholder}
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.create.base.description.label}>
        <AutoResizeTextarea
          placeholder={CONTENT.create.base.description.placeholder}
        />
      </LabelInputArea>
      <DifficultySelect />
      <CategorySelectClient categories={categories} />
      <QuestionControlSection onAddQuestion={onAddQuestion} />
    </div>
  );
};
