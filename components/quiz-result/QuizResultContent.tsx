import { ResultSummaryWrapper } from './ResultSummary/ResultSummaryWrapper';
import { ReviewResult } from './QuestionResult/ReviewResult';
import type { QuizResultContentProps } from '@/types/props';
import { QuizInfo } from '../shared-quiz/QuizInfo';
import { AdsTips } from '../shared-quiz/AdsTips';
import { ResultSummary } from './ResultSummary/ResultSummary';
import { ResultDetails } from './ResultSummary/ResultDetails';

export default function QuizResultContent({
  resultId,
  title,
  description,
  questions,
  difficulty,
  categories,
  score,
  correctAnswers,
  totalQuestions,
  answers,
  finishedAt,
}: QuizResultContentProps) {
  const incorrectAnswers = totalQuestions - correctAnswers;

  return (
    <div className="min-h-screen px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-6 md:px-8">
            <QuizInfo
              title={title!}
              description={description!}
              difficulty={difficulty!}
              categories={categories!}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 p-4 md:p-6 md:grid-cols-[minmax(0,6fr)_minmax(300px,4fr)] md:p-8">
            <div className="flex flex-col gap-6">
              <ResultSummaryWrapper>
                <ResultSummary
                  score={score}
                  correctAnswers={correctAnswers}
                  incorrectAnswers={incorrectAnswers}
                  totalQuestions={totalQuestions}
                  questions={questions}
                  finishedAt={finishedAt}
                />
              </ResultSummaryWrapper>

              <ReviewResult answers={answers} />
              <ResultDetails resultId={resultId} finishedAt={finishedAt} /> 

            </div>

            {/* Right column */}
            <aside className="flex flex-col gap-4">
              <AdsTips />

              {/* <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-950">
                    {CONTENT.quiz_result.cta.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {CONTENT.quiz_result.cta.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  {CONTENT.quiz_result.cta.browse_quizzes}
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div> */}

              {/* <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                <RotateCcw className="h-4 w-4" />
                {CONTENT.quiz_result.cta.retake_quiz}
              </button> */}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
