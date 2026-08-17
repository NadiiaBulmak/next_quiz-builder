import { AnalyticsHeader } from '@/components/results/AnalyticsHeader';
import { QuizMetrics } from '@/components/results/QuizStatistic/Metrics';
import { QuizInfo } from '@/components/results/QuizStatistic/QuizInfo';
import { Score } from '@/components/results/QuizStatistic/Score';
import { ResultDetailsList } from '@/components/results/ResultDetailsList';
import { CONTENT } from '@/constants/content';
import {
  getQuizStatisticById,
  getResultDetailsByQuizId,
} from '@/services/result/getQuizForResult';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.quizzes.resultDetails;

export default async function ResultPerQuiz({
  params,
  searchParams,
}: {
  params: Promise<{ quizId: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { quizId } = await params;
  const { page } = await searchParams;
  const [quizResult, resultDetails] = await Promise.all([
    getQuizStatisticById(quizId),
    getResultDetailsByQuizId(quizId, Number(page) || 1),
  ]);

  return (
    <div className="min-h-screen flex-1 bg-zinc-50 px-3 py-4 md:px-6 md:py-6  mb-20 lg:mb-0">
      <div className="flex w-full flex-col gap-6">
        <div className="flex gap-4 items-center w-full">
          {/* <BackButton /> */}
          <AnalyticsHeader
            title={CONTENT.results.analyticsPerQuiz.title}
            description={CONTENT.results.analyticsPerQuiz.description}
          />
        </div>

        <div className="p-5 md:p-6 h-full flex justify-between bg-white rounded-xl border border-stone-200 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row lg:items-start lg:justify-between h-full w-full">
            <QuizInfo
              quiz={{
                ...quizResult.quiz,
                description: CONTENT.results.overview.description,
              }}
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr] w-full lg:max-w-[50%]">
              <Score
                score={quizResult.quiz.averageScore}
                title={CONTENT.results.score.title}
                description={CONTENT.results.score.description}
              />
              <QuizMetrics
                totalParticipants={quizResult.quiz.totalParticipants}
                questionsCount={quizResult.quiz.questionsCount}
              />
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <AnalyticsHeader
            title={CONTENT.results.details.title}
            description={CONTENT.results.details.description}
          />

          <ResultDetailsList
            results={resultDetails.results}
            currentPage={resultDetails.currentPage}
            totalPages={resultDetails.totalPages}
          />
        </section>
      </div>
    </div>
  );
}
