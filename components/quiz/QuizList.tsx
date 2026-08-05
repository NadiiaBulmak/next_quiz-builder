import { getAllMyQuizzes, getAllQuizzes } from '@/services/quizz.service';
import QuizListItem from './QuizListItem';
import { ListType, QuizListType } from '@/types/props';
import type { QuizListItemType } from '@/types/quiz';

export default async function QuizList({ listType }: QuizListType) {
  const quizzes =
    listType === ListType.all ? await getAllQuizzes() : await getAllMyQuizzes();
  const typedQuizzes = quizzes as QuizListItemType[];
  console.log(typedQuizzes);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full p-4">
      {quizzes.map((q) => (
        <QuizListItem key={q.id} {...q} listType={listType} />
      ))}
    </div>
  );
}
