import { ClearSearchButton } from './ClearSearchButton';
import {
  getAllMyQuizzesPaginated,
  getAllQuizzesPaginated,
} from '@/services/quizz.service';
import { QuizListItem } from './QuizListItem';
import { ListType, QuizListType, sortType } from '@/types/props';
import { Pagination } from '@/components/shared/Pagination';
import { CONTENT } from '@/constants/content';
import { Search } from 'lucide-react';
import { QuizSort } from '@/types/quiz';

function getOrderBy(sort?: sortType): QuizSort {
  switch (sort) {
    case sortType.dateASC:
      return { createdAt: 'desc' };
    case sortType.dateDSC:
      return { createdAt: 'asc' };
    case sortType.alphASC:
      return { title: 'asc' };
    case sortType.alphDSC:
      return { title: 'desc' };
    default:
      return {};
  }
}

export const QuizList = async ({
  listType,
  page = 1,
  searchQuery = '',
  filter,
  sort,
}: QuizListType & { page?: number; searchQuery?: string }) => {
  const result =
    listType === ListType.all
      ? await getAllQuizzesPaginated(
          searchQuery,
          {
            isPublished: true,
            ...(filter?.categories?.length && {
              category: filter.categories,
            }),
            ...(filter?.difficulty && { difficulty: filter.difficulty }),
          },
          getOrderBy(sort),
          page,
        )
      : await getAllMyQuizzesPaginated(
          searchQuery,
          {
            ...(filter?.categories?.length && {
              category: filter.categories,
            }),
            ...(filter?.difficulty && { difficulty: filter.difficulty }),
          },
          page,
        );

  return (
    <div className="min-w-0 flex-1">
      {searchQuery ? (
        <div className="w-full flex items-center justify-between gap-4 rounded-xl border border-green-500 bg-lime-50/60 px-5 py-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-green-500">
              <Search size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-950">
                {CONTENT.quiz_list.search_results_for}{' '}
                <span className="text-green-700">
                  &quot;{searchQuery}&quot;
                </span>
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                {CONTENT.quiz_list.search_results_count(result.quizzes.length)}
              </p>
            </div>
          </div>

          <ClearSearchButton />
        </div>
      ) : (
        <div className="w-full flex items-center justify-between gap-4 rounded-xl border border-green-500 bg-lime-50/60 px-5 py-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-green-500">
              <Search size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-950">
                {CONTENT.quiz_list.available_quizzes}{' '}
                <span className="text-green-700">{result.totalQuizzes}</span>
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                {CONTENT.quiz_list.search_hint}
              </p>
            </div>
          </div>
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
    </div>
  );
};
