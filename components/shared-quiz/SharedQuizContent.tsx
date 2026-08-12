'use client';

import { useState } from 'react';
import { Quiz } from '@/types/quiz';
import { QuizInfo } from './QuizInfo';
import { QuizQuestions } from './QuizQuestions';
import { QuizProgress } from './QuizProgress';
import { AdsTips } from './AdsTips';
import { NoRegistrationRequired } from './NoRegistrationRequired';

export default function SharedQuizContent({
  title,
  description,
  questions,
  difficulty,
  categories,
}: Partial<Quiz>) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(
    questions && questions.length > 0 ? questions[currentQuestionIndex] : null,
  );
  const [selectedAnswersByQuestion, setSelectedAnswersByQuestion] = useState<
    Record<string, string[]>
  >({});

  const questionsLength = questions?.length || 0;
  const currentQuestion = questions?.[currentQuestionIndex] || null;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (questions?.length ? questions.length - 1 : 0)) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setQuestion(questions?.[nextIndex] || null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setQuestion(questions?.[prevIndex] || null);
    }
  };

  const isQuestionAnswered = (questionId: string) => {
    return (selectedAnswersByQuestion[questionId]?.length || 0) > 0;
  };

  const isQuizCompleted = questions?.every(
    (q) => (selectedAnswersByQuestion[q.id]?.length || 0) > 0,
  ) || false;

  const isCurrentQuestion = (questionId: string) => {
    return currentQuestion?.id === questionId;
  };

  const handleAnswerSelect = (
    questionId: string,
    selectedAnswerIds: string[],
  ) => {
    setSelectedAnswersByQuestion((prevSelectedAnswersByQuestion) => {
      if (selectedAnswerIds.length === 0) {
        const { [questionId]: _removed, ...rest } = prevSelectedAnswersByQuestion;
        return rest;
      }

      return {
        ...prevSelectedAnswersByQuestion,
        [questionId]: selectedAnswerIds,
      };
    });
  };

  const disabledNext =
    currentQuestionIndex >= (questions?.length ? questions.length - 1 : 0);
  const disabledPrevious = currentQuestionIndex <= 0;

  return (
    <div className="px-6 md:px-8 md:px-8 py-6">
      <div className="flex flex-col gap-4 bg-white shadow-md w-full rounded-md p-4 justify-between  px-6 md:px-8 md:px-8 py-6">
        <QuizInfo
          title={title!}
          description={description!}
          difficulty={difficulty!}
          categories={categories!}
        />
        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-4">
          <QuizQuestions
            currentQuestionIndex={currentQuestionIndex}
            handlePreviousQuestion={handlePreviousQuestion}
            handleNextQuestion={handleNextQuestion}
            question={currentQuestion}
            disabledPrevious={disabledPrevious}
            disabledNext={disabledNext}
            questionsLength={questionsLength}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswerIds={
              currentQuestion ? (selectedAnswersByQuestion[currentQuestion.id] ?? []) : []
            }
            isQuizCompleted={isQuizCompleted}
          />
          <div className="flex flex-col gap-4">
            <QuizProgress
              questions={questions!}
              isQuestionAnswered={isQuestionAnswered}
              isCurrentQuestion={isCurrentQuestion}
            />
            <AdsTips />
          </div>
          <NoRegistrationRequired />
        </div>
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
}
