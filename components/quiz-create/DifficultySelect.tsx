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
import { LabelInputArea } from './LabelInputArea';

export default function DifficultySelect() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  return (
    <LabelInputArea label={CONTENT.create.base.difficulty.label}>
      <Select value={difficulty} onValueChange={setDifficulty}>
        <SelectTrigger id="difficulty" className="w-full border-1 p-2 text-sm rounded-md">
          <SelectValue
            placeholder={CONTENT.create.base.difficulty.placeholder}
          />
        </SelectTrigger>

        <SelectContent side="bottom" align="start" alignItemWithTrigger={false}>
          {Object.values(Difficulty).map((d) => (
            <SelectItem key={d} value={d} className="pl-2 p-2 text-sm rounded-md">
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </LabelInputArea>
  );
}
