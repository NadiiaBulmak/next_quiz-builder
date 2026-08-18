import { CONTENT } from '@/constants/content';
import { QuizFormField } from '@/constants/formFields';
import { QUIZ_INTENTS } from '@/constants/quiz';
import { Button } from '../../ui/button';
import { QuestionControlSectionType } from '@/types/props';
import { FolderOpen, Plus, Send } from 'lucide-react';

export const QuestionControlSection = ({
  onAddQuestion,
  isEditMode = false,
  isPending = false,
}: Partial<QuestionControlSectionType> & {
  isEditMode?: boolean;
  isPending?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button
        type="button"
        className="h-12 w-full rounded-sm py-4 border-lime-300 flex items-center cursor-pointer lg:h-10"
        variant="outline"
        onClick={onAddQuestion}
        disabled={isPending}
      >
        <Plus className="w-4 h-4 text-lime-500" />
        {CONTENT.create.buttons.add_question}
      </Button>
      {isEditMode ? (
        <Button
          type="submit"
          name={QuizFormField.INTENT}
          value={QUIZ_INTENTS.PATCH}
          disabled={isPending}
          className="h-12 w-full rounded-sm py-4 cursor-pointer lg:h-10"
        >
          <Send className="w-4 h-4 text-lime-500" />
          {isPending ? CONTENT.common.submitting : CONTENT.create.buttons.patch}
        </Button>
      ) : (
        <>
          <Button
            type="submit"
            name={QuizFormField.INTENT}
            value={QUIZ_INTENTS.SAVE}
            disabled={isPending}
            className="h-12 w-full rounded-sm py-4 cursor-pointer lg:h-10"
          >
            <Send className="w-4 h-4 text-lime-500" />
            {isPending
              ? CONTENT.common.submitting
              : CONTENT.create.buttons.save}
          </Button>
          <Button
            type="submit"
            name={QuizFormField.INTENT}
            value={QUIZ_INTENTS.DRAFT}
            disabled={isPending}
            className="h-12 w-full rounded-sm py-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer lg:h-10"
          >
            <FolderOpen className="w-4 h-4" />
            {isPending
              ? CONTENT.common.submitting
              : CONTENT.create.buttons.draft}
          </Button>
        </>
      )}
    </div>
  );
};
