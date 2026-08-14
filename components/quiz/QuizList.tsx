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
}: QuizListType & { page?: number }) {
  const result =
    listType === ListType.all
      ? await getAllQuizzesPaginated(null, { isPublished: true }, {}, page)
      : await getAllMyQuizzesPaginated({}, page);

  return (
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
  );
}
