import { AnalyticsHeader } from '@/components/results/AnalyticsHeader';
import { ResultStatsList } from '@/components/results/Stats/ResultStats';
import { ResultsList } from '@/components/results/ResultsList';
import { QuizCountBadge } from '@/components/results/QuizCountBadge';
import { NoResultsYet } from '@/components/results/NoResultsYet';
import { CONTENT } from '@/constants/content';
import { getCurrentUser } from '@/services/auth';
import { getQuizzesStatistics } from '@/services/result/getQuizForResult';

export default async function ResultsQuizzes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const user = await getCurrentUser();
  const { page } = await searchParams;
  const results = await getQuizzesStatistics(user?.id || '', Number(page) || 1);

  return (
    <div className="min-h-screen flex-1 bg-zinc-50 px-3 py-4 md:px-6 md:py-6  mb-20 lg:mb-0">
      <div className="flex w-full flex-col gap-6">
        <AnalyticsHeader
          title={CONTENT.results.analytics.title}
          description={CONTENT.results.analytics.description}
        />

        <ResultStatsList {...results} />

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <AnalyticsHeader
              title={CONTENT.results.overview.title}
              description={CONTENT.results.overview.description}
            />
            <QuizCountBadge total={results.totalQuizzes} />
          </div>

          {results.totalQuizzes > 0 ? (
            <ResultsList
              quizzes={results.quizzes}
              currentPage={results.currentPage}
              totalPages={results.totalPages}
            />
          ) : (
            <NoResultsYet />
          )}
        </section>
      </div>
    </div>
  );
}
