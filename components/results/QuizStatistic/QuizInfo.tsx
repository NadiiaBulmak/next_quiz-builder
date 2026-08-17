import Badge from '@/components/quiz/Badge';
import type { QuizResultOverviewProps } from '@/types/props';

export const QuizInfo = ({ quiz }: QuizResultOverviewProps) => {
  const { title, difficulty, categories, description } = quiz;
  const safeCategories = categories ?? [];

  return (
    <div className="flex-1">
      <div className="flex flex-col items-start gap-2 lg:flex-nowrap lg:gap-3">
        <h3 className="truncate text-lg font-semibold text-stone-900">
          {title}
        </h3>

        <Badge difficultyName={difficulty.name} />
      </div>

      {description && (
        <p className="mt-1.5 line-clamp-2 max-w-2xl text-sm leading-6 text-stone-500">
          {description}
        </p>
      )}

      {safeCategories.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {safeCategories.map((category) => (
            <span
              key={category.name}
              className="rounded-md bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600"
            >
              {category.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
