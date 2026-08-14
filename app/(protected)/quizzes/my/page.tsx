import { QuizzesContent } from '@/components/quiz-list/QuizzesContent';
import FilterZone from '@/components/quiz/FilterZone';
import QuizList from '@/components/quiz/QuizList';
import { getCurrentUser } from '@/services/auth';
import { ListType } from '@/types/props';

export default async function AllQuizzes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const { page, search } = await searchParams;
  await getCurrentUser();
  return (
    <QuizzesContent searchQuery={search}>
      <QuizList
        listType={ListType.my}
        page={Number(page) || 1}
        searchQuery={search}
      />
    </QuizzesContent>
  );
}
