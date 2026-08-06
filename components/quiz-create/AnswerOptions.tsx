'use client';

import { useRef } from 'react';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { Plus } from 'lucide-react';
import { AnswerOptionsProps, AnswerType } from '@/types/props';
import { defaultAnswerOption } from '@/constants/initialFormState';
import { AnswerOptionItem } from './AnswerOptionItem';

export const AnswerOptions = ({
  answers,
  onChangeAnswers,
}: AnswerOptionsProps) => {
  const options = answers;
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const rewriteOrder = (items: AnswerType[]) =>
    items.map((opt, i) => ({ ...opt, order: i + 1 }));

  const commitOptions = (items: AnswerType[]) =>
    onChangeAnswers(rewriteOrder(items));

  const handleSort = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    const _options = [...options];
    const draggedItemContent = _options.splice(dragItem.current, 1)[0];
    _options.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    commitOptions(_options);
  };

  const addNewOption = () =>
    commitOptions([
      ...options,
      {
        ...defaultAnswerOption,
        id: crypto.randomUUID(),
        order: options.length + 1,
      },
    ]);

  const deleteOption = (order: number) =>
    commitOptions(options.filter((p) => p.order !== order));

  const updateOption = (updatedOption: AnswerType) => {
    const updated = options.map((option) => {
      if (updatedOption.id && option.id) {
        return option.id === updatedOption.id ? updatedOption : option;
      }

      return option.order === updatedOption.order ? updatedOption : option;
    });

    onChangeAnswers(updated);
  };

  return (
    <div className="flex flex-col gap-3">
      {options.length !== 0 ? (
        <>
          {options.map((o, idx) => (
            <AnswerOptionItem
              key={o.id ?? `${o.order}-${idx}`}
              index={idx}
              {...o}
              draggable
              onDragStart={() => {
                dragItem.current = idx;
              }}
              onDragEnter={(e) => {
                e.preventDefault();
                dragOverItem.current = idx;
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleSort}
              onDelete={deleteOption}
              onChange={updateOption}
            />
          ))}
        </>
      ) : (
        <p>{CONTENT.create.questions.options_empty_text}</p>
      )}

      <Button
        className="w-full rounded-sm py-4 border-lime-300 flex gap-1 order-last"
        variant="outline"
        onClick={addNewOption}
      >
        <Plus />
        {CONTENT.create.buttons.add_option}
      </Button>
    </div>
  );
};
