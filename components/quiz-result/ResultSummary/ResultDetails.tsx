import { CONTENT } from '@/constants/content';
import type { ResultDetailsProps } from '@/types/props';

export const ResultDetails = ({ resultId, finishedAt }: ResultDetailsProps) => (
  <div className="flex flex-col gap-2 rounded-lg bg-gray-50 px-4 py-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
    <span>
      {CONTENT.quiz_result.details.result_id}{' '}
      <span className="font-medium text-gray-700 truncate w-12">
        {resultId}
      </span>
    </span>

    <span>
      {CONTENT.quiz_result.details.finished_at} {finishedAt.toLocaleString()}
    </span>
  </div>
);
