import {
  getAllMyQuizzesPaginated,
  getAllQuizzesPaginated,
} from '@/services/quizz.service';
import QuizListItem from './QuizListItem';
import { ListType, QuizListType } from '@/types/props';
import { Pagination } from '@/components/shared/Pagination';

export default async function QuizList({
  listType,
  page = 1,
  searchQuery = '',
}: QuizListType & { page?: number; searchQuery?: string }) {
  const result =
    listType === ListType.all
      ? await getAllQuizzesPaginated(
          searchQuery,
          { isPublished: true },
          {},
          page,
        )
      : await getAllMyQuizzesPaginated(searchQuery, {}, page);

  return (
    <>
      {searchQuery ? (
        <div className="mb-4 flex w-full items-center gap-2 text-sm text-gray-500">
          <span>Search results for</span>

          <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
            “{searchQuery}”
          </span>
        </div>
      ) : (
        <div className="mb-4 flex w-full items-center gap-2 text-sm text-gray-500">
          <span>Available quizzes:</span>
          <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
            {result.totalQuizzes} quizzes
          </span>
        </div>
      )}
      <div className="flex w-full flex-col gap-4">
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {result.quizzes.map((q) => (
            <QuizListItem key={q.id} {...q} listType={listType} />
          ))}
        </div>
        <Pagination
          currentPage={result.currentPage}
          totalPages={result.totalPages}
        />
      </div>
    </>
  );
}
