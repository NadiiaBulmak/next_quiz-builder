export const QuizCountBadge = ({ total }: { total: number }) => (
  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-green-700">
    {total} {total === 1 ? 'quiz' : 'quizzes'}
  </span>
);
