import FilterZone from '@/components/quiz/FilterZone';
import QuizList from '@/components/quiz/QuizList';
import { getCurrentUser } from '@/services/auth';
import { ListType } from '@/types/props';

export default async function AllQuizzes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  await getCurrentUser();
  const { page } = await searchParams;
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black  bg-white  px-3 md:px-6 py-3 md:py-6 gap-4  mb-20 lg:mb-0">
      <FilterZone />
      <QuizList listType={ListType.all} page={Number(page) || 1} />
    </div>
  );
}
