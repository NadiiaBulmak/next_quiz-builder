import { type QuizListItemType } from '@/types/quiz';
import { ListType, QuizListType } from '@/types/props';
import { QuizListItemTopContent } from './QuizListItemTopContent';
import { QuizListItemMainContent } from './QuizListItemMainContent';
import { QuizListItemBottomContent } from './QuizListItemBottomContent';

export default function QuizListItem({
  listType,
  difficulty: { name: difficultyName },
  ...quiz
}: QuizListItemType & Partial<QuizListType>) {
  const showAllQuiz = listType === ListType.all;
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md w-full rounded-md p-4 justify-between">
      <div className="flex flex-col gap-2">
        <QuizListItemTopContent
          difficultyName={difficultyName}
          showAllQuiz={showAllQuiz}
        />
        <QuizListItemMainContent {...quiz} />
      </div>
      <QuizListItemBottomContent  showAllQuiz={showAllQuiz} />
    </div>
  );
}
