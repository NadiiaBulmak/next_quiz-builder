'use client';

import { AnswerOptionItemProps } from '@/types/props';
import { CircleCheck, CircleX, GripVertical, X } from 'lucide-react';
import { Input } from '../../ui/input';
import { ChangeEvent } from 'react';
import { CONTENT } from '@/constants/content';

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
        className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center lg:h-8 lg:w-8"
        aria-label={
          isCorrect
            ? CONTENT.create.questions.correct_answer
            : CONTENT.create.questions.mark_correct_answer
        }
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
          className="h-11 rounded-sm lg:h-10"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange?.({ id, order, text: e.target.value, isCorrect })
          }
        />
        <button
          type="button"
          aria-label={CONTENT.create.questions.delete_answer}
          onClick={() => onDelete?.(order)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border hover:bg-gray-100 lg:h-10 lg:w-10"
        >
          <X className="cursor-pointer" width={20} height={20} />
        </button>
        <GripVertical className="h-5 w-5 shrink-0 cursor-pointer hover:text-lime-500" />
      </div>
    </div>
  );
};
