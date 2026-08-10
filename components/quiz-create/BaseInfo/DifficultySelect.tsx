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

type DifficultySelectProps = {
  initialValue?: string;
};

export default function DifficultySelect({
  initialValue = '',
}: DifficultySelectProps) {
  const [difficulty, setDifficulty] = useState(initialValue);

  return (
    <LabelInputArea label={CONTENT.create.base.difficulty.label}>
      <Select value={difficulty} onValueChange={setDifficulty}>
        <SelectTrigger
          id="difficulty"
          className="w-full border p-2 text-sm rounded-md border-gray-300 focus:border-lime-500 focus:ring-lime-500 disabled:cursor-not-allowed disabled:opacity-50"
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
              className="pl-2 p-2 text-sm rounded-md"
            >
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <input type="hidden" name="difficulty" value={difficulty ?? ''} />
    </LabelInputArea>
  );
}
