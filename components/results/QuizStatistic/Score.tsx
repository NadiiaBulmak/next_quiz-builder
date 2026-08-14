import { ScoreCircle } from './ScoreCircle';
import { CONTENT } from '@/constants/content';
export const Score = ({ score, title, description }: { score: number; title: string; description: string }) => {
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
