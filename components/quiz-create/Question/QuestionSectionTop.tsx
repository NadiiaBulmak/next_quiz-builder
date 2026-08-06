import { CONTENT } from '@/constants/content';
import {
  QuestionControlSectionType,
  QuestionSectionTopProps,
} from '@/types/props';
import { ChevronDown, ChevronUp, GripVertical, Trash2 } from 'lucide-react';

export const QuestionSectionTop = ({
  order,
  setExtended,
  extended,
  onDeleteQuestion,
}: QuestionSectionTopProps &
  Pick<QuestionControlSectionType, 'onDeleteQuestion'>) => {
  const switchExtended = () => {
    setExtended((prev) => !prev);
  };

  const deleteQuestion = (orderToDelete: number) =>
    onDeleteQuestion(orderToDelete);

  return (
    <div className="flex items center justify-between w-full gap-3">
      <div className="flex items-center gap-1">
        <GripVertical width={16} height={16} />
        <div className="text-sm font-semibold">
          {CONTENT.create.questions.item + ' ' + order}{' '}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => deleteQuestion(order!)}
          className="cursor-pointer"
        >
          <Trash2 width={16} height={16} />
        </button>

        <button
          type="button"
          onClick={switchExtended}
          className="cursor-pointer"
        >
          {extended ? (
            <ChevronUp width={20} height={20} />
          ) : (
            <ChevronDown width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  );
};
