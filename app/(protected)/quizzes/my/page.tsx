import { QuizzesContent } from '@/components/quiz-list/QuizzesContent';
import { FilterModal } from '@/components/quiz/FilterModal';
import { QuizList } from '@/components/quiz/QuizList';
import { getCurrentUser } from '@/services/auth';
import { ListType, sortType } from '@/types/props';
import { getCathegories } from '@/services/category.service';
import { CONTENT } from '@/constants/content';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.quizzes.my;

export default async function MyQuizzes({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
    difficulty?: string;
    sortBy?: string;
  }>;
}) {
  const { page, search, category, difficulty, sortBy } = await searchParams;
  await getCurrentUser();
  const categories = await getCathegories();
  const selectedCategories = category ? category.split(',') : [];

  return (
    <QuizzesContent searchQuery={search}>
      <div className="group flex w-full gap-0">
        <QuizList
          listType={ListType.my}
          page={Number(page) || 1}
          searchQuery={search}
          filter={{ categories: selectedCategories, difficulty }}
          sort={sortBy as sortType}
        />
        <FilterModal
          categories={categories}
          initialCategories={selectedCategories}
          initialDifficulty={difficulty}
          initialSort={sortBy}
        />
      </div>
    </QuizzesContent>
  );
}
