'use client';

import { AnswerType } from '@/types/props';
import { CircleCheck, CircleX, GripVertical, X } from 'lucide-react';
import { Input } from '../ui/input';
import { useState, ChangeEvent, DragEvent } from 'react';

type Props = AnswerType & {
  index?: number;
  draggable?: boolean;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
  onDelete?: (order: number) => void;
};

export const AnswerOptionItem = ({
  order,
  text,
  isCorrect,
  draggable,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
  onDelete,
}: Props) => {
  const [optionOrder, setOptionOrder] = useState<number>(order);
  const [optionText, setOptionText] = useState<string>(text);
  const [optionIsCorrect, setOptionIsCorrect] = useState<boolean>(isCorrect);
  return (
    <div
      className={`order-${optionOrder} flex items-center gap-2`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div
        onClick={() => setOptionIsCorrect((prev) => !prev)}
        className="cursor-pointer"
      >
        {optionIsCorrect ? (
          <CircleCheck width={20} height={20} />
        ) : (
          <CircleX width={20} height={20} />
        )}
      </div>
      <div className="relative w-full flex items-center gap-3">
        <Input
          className=""
          value={optionText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOptionText(e.target.value)
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
