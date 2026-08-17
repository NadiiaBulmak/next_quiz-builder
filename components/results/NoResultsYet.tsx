export const NoResultsYet = () => {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
        <span className="text-lg text-stone-400">∅</span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-stone-900">
        No quiz results yet
      </h3>

      <p className="mt-1 max-w-sm text-sm text-stone-500">
        Once someone completes one of your quizzes, performance statistics will
        appear here.
      </p>
    </div>
  );
};
