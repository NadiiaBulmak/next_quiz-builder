import { CONTENT } from '@/constants/content';
import { Button } from '../../ui/button';
import { QuestionControlSectionType } from '@/types/props';

export const QuestionControlSection = ({
  onAddQuestion,
}: Partial<QuestionControlSectionType>) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button
        type="button"
        className="w-full rounded-sm py-4"
        variant="outline"
        onClick={onAddQuestion}
      >
        {CONTENT.create.buttons.add_question}
      </Button>
      <Button
        type="submit"
        name="intent"
        value="save"
        className="w-full rounded-sm py-4"
      >
        {CONTENT.create.buttons.save}
      </Button>
      <Button
        type="submit"
        name="intent"
        value="draft"
        className="w-full rounded-sm py-4"
      >
        {CONTENT.create.buttons.draft}
      </Button>
    </div>
  );
};
