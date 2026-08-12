'use client';

import { Quiz } from '@/types/quiz';
import { ArrowRight, Circle, CircleCheck, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { QuestionAnswerList } from './QuestionAnswerList';

export const QuizQuestions = ({
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
    <div className="flex flex-col gap-4 justify-between p-6 rounded-md border border-gray-300">
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

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-4">
        <Button
          className="cursor-pointer self-end w-fit p-3 lg:p-5 text-lime-300 flex items-center gap-2 rounded-md text-xs lg:text-sm w-full md:w-fit"
          onClick={handlePreviousQuestion}
          disabled={disabledPrevious}
        >
          <ArrowLeft width={20} height={20} />
          {CONTENT.shared_quiz.buttons.previous}
        </Button>
        <Button
          className="cursor-pointer self-end w-fit p-3 lg:p-5 text-lime-300 flex items-center gap-2 rounded-md text-xs lg:text-sm w-full md:w-fit"
          onClick={handleNextQuestion}
          disabled={disabledNext}
        >
          {CONTENT.shared_quiz.buttons.next}
          <ArrowRight width={20} height={20} />
        </Button>
        <Button
          type="submit"
          className={`self-end w-fit p-3 lg:p-5 bg-black hover:bg-lime-900 cursor-pointer border-lime-500 text-white shadow-[0_0_0_3px_rgba(132,204,22,0.15)]  flex items-center gap-2 rounded-md text-xs lg:text-sm w-full md:w-fit ${isQuizCompleted ? 'animate-pulse animate-bounce' : 'opacity-50 cursor-not-allowed'}`}
          onClick={handleNextQuestion}
          disabled={!isQuizCompleted}
        >
          {CONTENT.shared_quiz.buttons.submit}
        </Button>
      </div>
    </div>
  );
};
