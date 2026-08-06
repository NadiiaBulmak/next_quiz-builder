'use client';

import { AnswerOptionItemProps } from '@/types/props';
import { CircleCheck, CircleX, GripVertical, X } from 'lucide-react';
import { Input } from '../ui/input';
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
      <div
        onClick={() => onChange?.({ id, order, text, isCorrect: !isCorrect })}
        className="cursor-pointer"
      >
        {isCorrect ? (
          <CircleCheck width={20} height={20} />
        ) : (
          <CircleX width={20} height={20} />
        )}
      </div>
      <div className="relative w-full flex items-center gap-3">
        <Input
          className=""
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange?.({ id, order, text: e.target.value, isCorrect })
          }
        />
        <X
          className="mt-auto mb-auto cursor-pointer"
          width={24}
          height={24}
          onClick={() => onDelete?.(order)}
        />
        <GripVertical />
      </div>
    </div>
  );
};
