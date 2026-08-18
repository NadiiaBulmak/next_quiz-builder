'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Difficulty } from '@/types/quiz';
import { CONTENT } from '@/constants/content';
import { LabelInputArea } from '../UI/LabelInputArea';

import type { DifficultySelectProps } from '@/types/props';
import { QuizFormField } from '@/constants/formFields';

export const DifficultySelect = ({
  initialValue = '',
  value,
  onValueChange,
  error,
}: DifficultySelectProps) => {
  const [difficulty, setDifficulty] = useState(initialValue);
  const currentDifficulty = value ?? difficulty;

  const handleValueChange = (nextValue: string) => {
    setDifficulty(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <LabelInputArea label={CONTENT.create.base.difficulty.label}>
      <Select
        value={currentDifficulty}
        onValueChange={(nextValue) => handleValueChange(nextValue ?? '')}
      >
        <SelectTrigger
          id={QuizFormField.DIFFICULTY}
          aria-invalid={Boolean(error?.length)}
          aria-describedby="difficulty-error"
          className="h-11 w-full border px-3 py-3 text-sm rounded-md border-gray-300 focus:border-lime-500 focus:ring-lime-500 disabled:cursor-not-allowed disabled:opacity-50 lg:h-10 lg:p-2"
        >
          <SelectValue
            placeholder={CONTENT.create.base.difficulty.placeholder}
          />
        </SelectTrigger>

        <SelectContent
          side="bottom"
          align="start"
          alignItemWithTrigger={false}
          className="border-1 border-lime-500"
        >
          {Object.values(Difficulty).map((d) => (
            <SelectItem
              key={d}
              value={d}
              className="h-11 pl-3 p-3 text-sm rounded-md lg:h-10 lg:p-2 lg:pl-2"
            >
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <input
        type="hidden"
        name={QuizFormField.DIFFICULTY}
        value={currentDifficulty}
      />
      <p id="difficulty-error" role="alert" className="text-xs text-red-600">
        {error?.join(' ')}
      </p>
    </LabelInputArea>
  );
};
