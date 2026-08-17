import type { QuizCountBadgeProps } from '@/types/props';

export const QuizCountBadge = ({ total }: QuizCountBadgeProps) => (
  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-green-700">
    {total} {total === 1 ? 'quiz' : 'quizzes'}
  </span>
);
