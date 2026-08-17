import type { ScoreCircleProps } from '@/types/props';

export const ScoreCircle = ({ score }: ScoreCircleProps) => {
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  const offset = circumference - (normalizedScore / 100) * circumference;

  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-stone-100"
        />

        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-lime-500 transition-all duration-500"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-stone-800">
        {normalizedScore}%
      </span>
    </div>
  );
};
