import { Trophy } from 'lucide-react';
import { ResultScore } from './ResultScore';
import { CONTENT } from '@/constants/content';

export const ResultSummaryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="rounded-xl md:border md:border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-200 ">
            <Trophy className="h-5 w-5 text-green-700" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-950">
              {CONTENT.quiz_result.summary.title}
            </h2>
            <p className="text-sm text-gray-500">
              {CONTENT.quiz_result.summary.description}
            </p>
          </div>
        </div>
      </div>

{children}
    </section>
  );
};
