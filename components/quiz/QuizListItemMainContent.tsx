import { BadgePropsType, QuizListItemType } from '@/types/quiz';
import Badge from './Badge';
import { QuizItemMenu } from './QuizItemMenu';
import { formatDate } from '@/utils/dateFormatter';
import { GlobeCheck, SquircleDashed } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const QuizListItemMainContent = ({
  showAllQuiz,
  title,
  description,
  author,
  isPublished,
  _count,
  updatedAt,
}: { showAllQuiz: boolean } & Partial<QuizListItemType>) => {
  const authorName = author?.name ?? CONTENT.quiz_list.item.unknown_author;
  const questionsCount = _count?.questions ?? 0;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-lg font-bold flex items-center gap-2">
          {title}{' '}
          {!showAllQuiz &&
            (isPublished ? (
              <GlobeCheck width={24} height={24} className="text-green-500" />
            ) : (
              <SquircleDashed
                width={24}
                height={24}
                className="text-gray-500"
              />
            ))}
        </div>
        <div className="text-[0.75rem] text-gray-500 ">{description}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-[0.75rem] text-gray-500">
          {CONTENT.quiz_list.item.meta(questionsCount, authorName)}
        </div>
        <div className="text-[0.75rem] text-gray-500">
          {updatedAt ? formatDate(updatedAt) : undefined}
        </div>
      </div>
    </>
  );
};
