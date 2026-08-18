import { Check, X } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export const QuestionResult = ({
  index,
  question,
  answer,
  isCorrect,
}: {
  index: number;
  question: string;
  answer: string;
  isCorrect: boolean;
}) => {
  return (
    <div
      className={`rounded-xl border p-5 ${
        isCorrect
          ? 'border-lime-200 bg-lime-50/40'
          : 'border-red-200 bg-red-50/30'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${
            isCorrect ? 'bg-lime-200 text-green-700' : 'bg-red-100 text-red-600'
          }`}
        >
          {index}
        </div>

        <div className="min-w-0 flex-1 flex flex-col gap-3">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-3">
            <p className="font-medium leading-6 text-gray-950">{question}</p>

            <div
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                isCorrect
                  ? 'bg-lime-200 text-green-700'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {isCorrect ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <X className="h-3.5 w-3.5" />
              )}

              {isCorrect
                ? CONTENT.quiz_result.review.correct
                : CONTENT.quiz_result.review.incorrect}
            </div>
          </div>

          <div className="mt-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
              {CONTENT.quiz_result.review.your_answer}
            </p>

            <div className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};