'use client';

import { AnswerOptionItemProps } from '@/types/props';
import { CircleCheck, CircleX, GripVertical, X } from 'lucide-react';
import { Input } from '../../ui/input';
import { ChangeEvent } from 'react';

export const AnswerOptionItem = ({
  id,
  order,
  text,
  isCorrect,
  draggable,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
  onDelete,
  onChange,
}: AnswerOptionItemProps) => {
  return (
    <div
      className={`order-${order} flex items-center gap-2`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <button
        type="button"
        onClick={() => {
          if (!isCorrect) {
            onChange?.({ id, order, text, isCorrect: true });
          }
        }}
        className="cursor-pointer"
        aria-label={isCorrect ? 'Correct answer' : 'Mark as correct answer'}
        aria-pressed={isCorrect}
      >
        {isCorrect ? (
          <CircleCheck width={20} height={20} className="text-lime-500" />
        ) : (
          <CircleX width={20} height={20} />
        )}
      </button>
      <div className="relative w-full flex items-center gap-3">
        <Input
          className="rounded-sm"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange?.({ id, order, text: e.target.value, isCorrect })
          }
        />
        <X
          className="mt-auto mb-auto cursor-pointer p-2 rounded-sm border hover:bg-gray-100 h-full"
          width={36}
          height={36}
          onClick={() => onDelete?.(order)}
        />
        <GripVertical className="cursor-pointer hover:text-lime-500" />
      </div>
    </div>
  );
};
