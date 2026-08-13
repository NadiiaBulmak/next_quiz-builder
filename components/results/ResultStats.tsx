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
    },
    {
      label: 'Total participants',
      value: totalParticipants,
      description: 'Across all quizzes',
    },
    {
      label: 'Average score',
      value: `${averageScore}%`,
      description: 'Across all responses',
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
        />
      ))}
    </div>
  );
};
