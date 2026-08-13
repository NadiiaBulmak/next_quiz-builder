import type { QuizResultOverview } from '@/types/props';
import Badge from '../quiz/Badge';
import Link from 'next/link';
import { Metric } from './Metrics';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { Button } from '../ui/button';
import { CopyPreviewLinkButton } from '../quiz/CopyPreviewLinkButton';
import { ScoreCircle } from './ScoreCircle';
import { ListOrdered, UsersRound } from 'lucide-react';

  export function QuizStatisticsCard({ quiz }: { quiz: QuizResultOverview }) {
  const score = Math.round(quiz.averageScore);

  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-md">
      <div className="p-5 md:p-6">
        {/* Top section */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          {/* Quiz information */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-lg font-semibold text-stone-900">
                {quiz.title}
              </h3>

              <Badge difficultyName={quiz.difficulty.name} />
            </div>

            {quiz.description && (
              <p className="mt-1.5 line-clamp-2 max-w-2xl text-sm leading-6 text-stone-500">
                {quiz.description}
              </p>
            )}

            {quiz.categories.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {quiz.categories.map((category) => (
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

          {/* Actions */}
          <div className="flex shrink-0 gap-2">
            <Link href={`${NAV_LINKS.quizzes.results}/${quiz.id}`}>
              <Button
                className="
                  rounded-md
                  border
                  border-black
                  bg-black
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-150
                  hover:border-lime-500
                  hover:bg-black
                  hover:shadow-[0_0_0_2px_rgba(132,204,22,0.25)]
                "
              >
                {CONTENT.results.buttons.view_results}
              </Button>
            </Link>

            <CopyPreviewLinkButton id={quiz.id} />
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-stone-100" />

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto]">
          {/* Score */}
          <div className="flex items-center gap-4">
            <ScoreCircle
             score={quiz.averageScore} />

            <div>
              <p className="text-sm font-medium text-stone-900">
                Average score
              </p>

              <p className="mt-0.5 text-xs text-stone-500">
                Across all attempts
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:max-w-md lg:grid-cols-2">
            <Metric value={quiz.totalParticipants} icon={UsersRound} />

            <Metric value={quiz.questionsCount} icon={ListOrdered} />
          </div>
        </div>
      </div>
    </article>
  );
}
