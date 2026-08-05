import { BadgePropsType, QuizListItemType } from '@/types/quiz';
import Badge from './Badge';
import { QuizItemMenu } from './QuizItemMenu';
import { formatDate } from '@/utils/dateFormatter';

export const QuizListItemMainContent = ({
  title,
  description,
  author,
  _count,
  updatedAt,
}: Partial<QuizListItemType>) => {
  const authorName = author?.name ?? 'Unknown';
  const questionsCount = _count?.questions ?? 0;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-[0.75rem] text-gray-500 ">{description}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-[0.75rem] text-gray-500">
          {questionsCount} Questions • By {authorName}
        </div>
        <div className="text-[0.75rem] text-gray-500">
          {updatedAt ? formatDate(updatedAt) : undefined}
        </div>
      </div>
    </>
  );
};
