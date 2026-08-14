import { FileQuestion, Users, ChartNoAxesColumnIncreasing } from 'lucide-react';
import { StatCard } from './StatCard';

export const ResultStatsList = ({
  totalQuizzes,
  totalParticipants,
  averageScore,
}: {
  totalQuizzes: number;
  totalParticipants: number;
  averageScore: number;
}) => {
  const stats = [
    {
      label: 'Total quizzes',
      value: totalQuizzes,
      description: 'Created by you',
      icon: FileQuestion,
    },
    {
      label: 'Total participants',
      value: totalParticipants,
      description: 'Across all quizzes',
      icon: Users,
    },
    {
      label: 'Average score',
      value: `${averageScore}%`,
      description: 'Across all responses',
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
