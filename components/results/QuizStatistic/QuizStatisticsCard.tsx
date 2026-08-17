import type { QuizStatisticsCardProps } from '@/types/props';
import { QuizInfo } from './QuizInfo';
import { QuizMetrics } from './Metrics';
import { CONTENT } from '@/constants/content';
import { QuizActions } from './QuizActions';
import { Score } from './Score';

export const QuizStatisticsCard = ({ quiz }: QuizStatisticsCardProps) => {
  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-md">
      <div className="p-5 md:p-6 h-full flex flex-col justify-between">
        <div className="flex flex-col flex-wrap gap-5 lg:flex-col lg:items-start lg:justify-between h-full">
          <QuizInfo quiz={quiz} />
          <QuizActions quiz={quiz} />
        </div>

        <div>
          <div className="my-5 h-px bg-stone-100" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr] w-full">
            <Score
              score={quiz.averageScore}
              title={CONTENT.results.score.title}
              description={CONTENT.results.score.description}
            />
            <QuizMetrics
              totalParticipants={quiz.totalParticipants}
              questionsCount={quiz.questionsCount}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
