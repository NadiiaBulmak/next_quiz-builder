import { ScoreCircle } from './ScoreCircle';
import { CONTENT } from '@/constants/content';
import type { ScoreProps } from '@/types/props';

export const Score = ({ score, title, description }: ScoreProps) => {
  return (
    <div className="flex items-center gap-4">
      <ScoreCircle score={score} />
      <div>
        <p className="text-sm font-medium text-stone-900">{title}</p>
        <p className="mt-0.5 text-xs text-stone-500">{description}</p>
      </div>
    </div>
  );
};
