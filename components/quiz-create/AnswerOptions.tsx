'use client';

import { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { CircleCheck, CircleX, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { AnswerType } from '@/types/props';
import { AnswerOptionItem } from './AnswerOptionItem';

export const initAnswerOptions: AnswerType[] = [
  {
    text: '1',
    isCorrect: true,
    order: 1,
  },
  {
    text: '2',
    isCorrect: false,
    order: 2,
  },
];

export const defaultAnswerOption = {
  text: '',
  isCorrect: false,
  order: 1,
};

export const AnswerOptions = () => {
  const [options, setOptions] = useState<AnswerType[] | []>(initAnswerOptions);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleSort = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    const _options = [...options];
    const draggedItemContent = _options.splice(dragItem.current, 1)[0];
    _options.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    // update order indexes so keys remain stable if using order in key
    const updated = _options.map((opt, i) => ({ ...opt, order: i + 1 }));
    setOptions(updated);
  };

  const addNewOption = () =>
    setOptions((prev) => [
      ...prev,
      { ...defaultAnswerOption, order: prev.length + 1 },
    ]);

  const deleteOption = (order: number) =>
    setOptions((prev) =>
      prev
        .filter((p) => p.order !== order)
        .map((a, index) => ({ ...a, order: index + 1 })),
    );

  return (
    <div className="flex flex-col gap-3">
      {options.length !== 0 ? (
        <>
          {options.map((o, idx) => (
            <AnswerOptionItem
              key={`${o.order}-${o.text}`}
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
