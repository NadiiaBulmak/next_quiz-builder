import { BadgePropsType } from '@/types/quiz';
import { getBadgeStyle } from '@/utils/getBadgeStyle';

export default function Badge({ difficultyName }: BadgePropsType) {
  return (
    <div
      className={`p-2 py-1 text-sm rounded-md font-medium w-fit ${getBadgeStyle(difficultyName)}`}
    >
      {difficultyName}
    </div>
  );
}
