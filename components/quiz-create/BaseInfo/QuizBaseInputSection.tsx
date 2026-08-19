'use client';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CONTENT } from '@/constants/content';
import { LabelInputArea } from '../UI/LabelInputArea';
import { AutoResizeTextarea } from '../UI/AutoResizeTextarea';
import { DifficultySelect } from './DifficultySelect';
import { QuestionControlSection } from './QuestionControlSection';
import { QuizBaseInputSectionProps } from '@/types/props';
import { CategorySelectClient } from './CategorySelectClient';
import { FieldError } from '@/components/shared/FormFeedback';
import { QuizFormField } from '@/constants/formFields';

export const QuizBaseInputSection = ({
  onAddQuestion,
  categories,
  initialTitle = '',
  initialDescription = '',
  initialDifficulty = '',
  initialSelectedCategories = [],
  title,
  description,
  selectedCategories,
  difficulty,
  onTitleChange,
  onDescriptionChange,
  onCategoriesChange,
  onDifficultyChange,
  isEditMode = false,
  isPending = false,
  errors,
}: QuizBaseInputSectionProps) => {
  return (
    <div className="w-full flex flex-col gap-6 order-first bg-white p-6 rounded-md shadow-sm border border-gray-200 md:order-none h-fit">
      <SectionTitle title={CONTENT.create.base.section_title} />
      <LabelInputArea label={CONTENT.create.base.title.label}>
        <AutoResizeTextarea
          id={`quiz-${QuizFormField.TITLE}`}
          name={QuizFormField.TITLE}
          placeholder={CONTENT.create.base.title.placeholder}
          initValue={initialTitle}
          value={title}
          onValueChange={onTitleChange}
          aria-invalid={Boolean(errors?.[QuizFormField.TITLE])}
          aria-describedby="quiz-title-error"
        />
        <FieldError
          id="quiz-title-error"
          errors={errors?.[QuizFormField.TITLE]}
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.create.base.description.label}>
        <AutoResizeTextarea
          id={`quiz-${QuizFormField.DESCRIPTION}`}
          name={QuizFormField.DESCRIPTION}
          placeholder={CONTENT.create.base.description.placeholder}
          initValue={initialDescription}
          value={description}
          onValueChange={onDescriptionChange}
          aria-invalid={Boolean(errors?.[QuizFormField.DESCRIPTION])}
          aria-describedby="quiz-description-error"
        />
        <FieldError
          id="quiz-description-error"
          errors={errors?.[QuizFormField.DESCRIPTION]}
        />
      </LabelInputArea>
      <DifficultySelect
        initialValue={initialDifficulty}
        value={difficulty}
        onValueChange={onDifficultyChange}
        error={errors?.[QuizFormField.DIFFICULTY]}
      />
      <CategorySelectClient
        categories={categories}
        initialSelectedNames={selectedCategories}
        selectedNames={selectedCategories}
        onSelectedNamesChange={onCategoriesChange}
        error={errors?.[QuizFormField.CATEGORIES]}
      />
      <QuestionControlSection
        onAddQuestion={onAddQuestion}
        isEditMode={isEditMode}
        isPending={isPending}
      />
    </div>
  );
};
