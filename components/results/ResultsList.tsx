import { QuizResultOverview } from '@/types/props';
import { QuizStatisticsCard } from './QuizStatisticsCard';

export const ResultsList = ({ quizzes }: { quizzes: QuizResultOverview[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {quizzes.map((quiz) => (
        <QuizStatisticsCard
          key={quiz.id}
          quiz={quiz}
        />
      ))}
    </div>
  );
};
