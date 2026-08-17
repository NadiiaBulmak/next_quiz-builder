import { FileQuestion, Users, ChartNoAxesColumnIncreasing } from 'lucide-react';
import { StatCard } from './StatCard';
import { CONTENT } from '@/constants/content';
import type { ResultStatsListProps } from '@/types/props';

export const ResultStatsList = ({
  totalQuizzes,
  totalParticipants,
  averageScore,
}: ResultStatsListProps) => {
  const stats = [
    {
      label: CONTENT.results.stats.total_quizzes,
      value: totalQuizzes,
      description: CONTENT.results.stats.total_quizzes_description,
      icon: FileQuestion,
    },
    {
      label: CONTENT.results.stats.total_participants,
      value: totalParticipants,
      description: CONTENT.results.stats.total_participants_description,
      icon: Users,
    },
    {
      label: CONTENT.results.stats.average_score,
      value: `${averageScore}%`,
      description: CONTENT.results.stats.average_score_description,
      icon: ChartNoAxesColumnIncreasing,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};
