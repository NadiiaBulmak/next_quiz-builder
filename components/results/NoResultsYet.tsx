import { CONTENT } from "@/constants/content";

export const NoResultsYet = () => {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
        <span className="text-lg text-stone-400">∅</span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-stone-900">
        {CONTENT.common.no_quiz_results_found.title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-stone-500">
        {CONTENT.common.no_quiz_results_found.description}
      </p>
    </div>
  );
};
