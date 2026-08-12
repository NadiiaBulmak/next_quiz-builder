import { CONTENT } from '@/constants/content';
import { QUIZ_INTENTS } from '@/constants/quiz';
import { Button } from '../../ui/button';
import { QuestionControlSectionType } from '@/types/props';
import { FolderOpen, Plus, Send } from 'lucide-react';

export const QuestionControlSection = ({
  onAddQuestion,
  isEditMode = false,
}: Partial<QuestionControlSectionType> & { isEditMode?: boolean }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button
        type="button"
        className="w-full rounded-sm py-4 border-lime-300 flex items-center cursor-pointer"
        variant="outline"
        onClick={onAddQuestion}
      >
        <Plus className="w-4 h-4 text-lime-500" />
        {CONTENT.create.buttons.add_question}
      </Button>
      {isEditMode ? (
        <Button
          type="submit"
          name="intent"
          value={QUIZ_INTENTS.PATCH}
          className="w-full rounded-sm py-4 cursor-pointer"
        >
          <Send className="w-4 h-4 text-lime-500" />
          {CONTENT.create.buttons.patch}
        </Button>
      ) : (
        <>
          <Button
            type="submit"
            name="intent"
            value={QUIZ_INTENTS.SAVE}
            className="w-full rounded-sm py-4 cursor-pointer"
          >
            <Send className="w-4 h-4 text-lime-500" />
            {CONTENT.create.buttons.save}
          </Button>
          <Button
            type="submit"
            name="intent"
            value={QUIZ_INTENTS.DRAFT}
            className="w-full rounded-sm py-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <FolderOpen className="w-4 h-4" />
            {CONTENT.create.buttons.draft}
          </Button>
        </>
      )}
    </div>
  );
};
