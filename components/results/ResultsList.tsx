'use client';

import { useRouter } from 'next/navigation';
import { QuizResultOverview } from '@/types/props';
import { Pagination } from '@/components/shared/Pagination';
import { QuizStatisticsCard } from './QuizStatistic/QuizStatisticsCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const ResultsList = ({
  quizzes,
  currentPage,
  totalPages,
}: {
  quizzes: QuizResultOverview[];
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();
  useScrollToTop();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {quizzes.map((quiz) => (
          <QuizStatisticsCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => router.push(`?page=${page}`)}
      />
    </div>
  );
};
