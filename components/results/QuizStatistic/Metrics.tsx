import type { QuizMetricsProps } from '@/types/props';
import { Metric } from '../Metrics';
import { UsersRound, ListOrdered } from 'lucide-react';

export const QuizMetrics = ({
  totalParticipants,
  questionsCount,
}: QuizMetricsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:max-w-md lg:grid-cols-2 w-fit md:w-full">
      <Metric value={totalParticipants} icon={UsersRound} />

      <Metric value={questionsCount} icon={ListOrdered} />
    </div>
  );
};
