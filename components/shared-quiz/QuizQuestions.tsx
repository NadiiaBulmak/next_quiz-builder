'use client';

import { Quiz } from '@/types/quiz';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { QuestionAnswerList } from './QuestionAnswerList';

export const QuizQuestions = ({
  isPending,
  currentQuestionIndex,
  handlePreviousQuestion,
  handleNextQuestion,
  question,
  disabledPrevious,
  disabledNext,
  // questions,
  questionsLength,
  handleAnswerSelect,
  selectedAnswerIds,
  // isQuestionAnswered,
  isQuizCompleted,
}: {
  isPending: boolean;
  currentQuestionIndex: number;
  handlePreviousQuestion: () => void;
  handleNextQuestion: () => void;
  question: Pick<Quiz, 'questions'>['questions'][number] | null;
  disabledPrevious: boolean;
  disabledNext: boolean;
  questionsLength: number;
  handleAnswerSelect: (questionId: string, selectedAnswerIds: string[]) => void;
  selectedAnswerIds: string[];
  isQuizCompleted: boolean;
  // isQuestionAnswered: (questionId: string) => boolean;
}) => {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-md border border-gray-300 p-4 sm:p-6 lg:gap-4">
      <div>
        <div className="font-semibold text-gray-600 text-sm">
          {CONTENT.shared_quiz.top.Question} {currentQuestionIndex + 1}{' '}
          {CONTENT.shared_quiz.top.of} {questionsLength}
        </div>
        <div className="font-semibold text-base my-4">{question?.text}</div>
        <QuestionAnswerList
          answers={question?.answers || []}
          questionId={question?.id || ''}
          selectedAnswerIds={selectedAnswerIds}
          handleAnswerSelect={handleAnswerSelect}
          // isQuestionAnswered={isQuestionAnswered}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-between lg:mt-4 lg:flex-row lg:gap-4">
        <Button
          type="button"
          className="h-12 w-full cursor-pointer self-end p-3 text-lime-300 flex items-center justify-center gap-2 rounded-md text-xs sm:w-fit lg:h-10 lg:p-5 lg:text-sm"
          onClick={handlePreviousQuestion}
          disabled={disabledPrevious}
        >
          <ArrowLeft width={20} height={20} />
          {CONTENT.shared_quiz.buttons.previous}
        </Button>
        <Button
          type="button"
          className="h-12 w-full cursor-pointer self-end p-3 text-lime-300 flex items-center justify-center gap-2 rounded-md text-xs sm:w-fit lg:h-10 lg:p-5 lg:text-sm"
          onClick={handleNextQuestion}
          disabled={disabledNext}
        >
          {CONTENT.shared_quiz.buttons.next}
          <ArrowRight width={20} height={20} />
        </Button>
        <Button
          type="submit"
          className={`h-12 w-full self-end p-3 bg-black hover:bg-lime-900 cursor-pointer border-lime-500 text-white shadow-[0_0_0_3px_rgba(132,204,22,0.15)] flex items-center justify-center gap-2 rounded-md text-xs sm:w-fit lg:h-10 lg:p-5 lg:text-sm ${isQuizCompleted ? 'animate-pulse animate-bounce' : 'opacity-50 cursor-not-allowed'}`}
          onClick={handleNextQuestion}
          disabled={isPending || !isQuizCompleted}
        >
          {isPending
            ? CONTENT.common.submitting
            : CONTENT.shared_quiz.buttons.submit}
        </Button>
      </div>
    </div>
  );
};
