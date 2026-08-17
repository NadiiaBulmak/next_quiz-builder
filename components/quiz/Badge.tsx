import { BadgePropsType } from '@/types/quiz';
import { getBadgeStyle } from '@/utils/getBadgeStyle';

export const Badge = ({ difficultyName }: BadgePropsType) => {
  return (
    <div
      className={`p-2 py-1 text-sm rounded-md font-medium w-fit ${getBadgeStyle(difficultyName)}`}
    >
      {difficultyName}
    </div>
  );
};
