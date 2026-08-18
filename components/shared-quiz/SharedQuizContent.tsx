'use client';

import { useActionState, useEffect, useState } from 'react';
import { Quiz } from '@/types/quiz';
import { QuizInfo } from './QuizInfo';
import { QuizQuestions } from './QuizQuestions';
import { QuizProgress } from './QuizProgress';
import { AdsTips } from './AdsTips';
import { NoRegistrationRequired } from './NoRegistrationRequired';
import { QuizRecipientInfo } from './QuizRecipientInfo';
import { NAV_LINKS } from '@/constants/nav_links';
import { quizResultInitialState } from '@/constants/initialFormState';
import { quizResult } from '@/app/actions/quiz-result.ts/quizResult';
import { useRouter } from 'next/navigation';
import { ActionToast } from '@/components/shared/FormFeedback';
import {
  AuthFormField,
  QuizFormField,
  QuizQuestionField,
} from '@/constants/formFields';

export const SharedQuizContent = ({
  id,
  title,
  description,
  questions,
  difficulty,
  categories,
  recipient,
}: Partial<Quiz> & {
  recipient: {
    email: string;
    name: string | null;
  } | null;
}) => {
  const [state, action, isPending] = useActionState(
    quizResult,
    quizResultInitialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.quiz_result + `/${state.user?.id}`);
    }
  }, [router, state?.success, state?.user?.id]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswersByQuestion, setSelectedAnswersByQuestion] = useState<
    Record<string, string[]>
  >({});

  const questionsLength = questions?.length || 0;
  const currentQuestion = questions?.[currentQuestionIndex] || null;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (questions?.length ? questions.length - 1 : 0)) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
    }
  };

  const isQuestionAnswered = (questionId: string) => {
    return (selectedAnswersByQuestion[questionId]?.length || 0) > 0;
  };

  const isQuizCompleted =
    questions?.every(
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
        const nextSelectedAnswers = { ...prevSelectedAnswersByQuestion };
        delete nextSelectedAnswers[questionId];
        return nextSelectedAnswers;
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
    <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8">
      <form
        action={action}
        className="flex w-full flex-col justify-between gap-5 rounded-md bg-white p-4 shadow-md sm:p-6 md:gap-4 md:px-8 md:py-6"
      >
        <input type="hidden" name={QuizFormField.QUIZ_ID} value={id ?? ''} />
        <input
          type="hidden"
          name={QuizQuestionField.ANSWERS}
          value={JSON.stringify(
            Object.entries(selectedAnswersByQuestion).flatMap(
              ([questionId, answerIds]) =>
                answerIds.map((answerId) => ({ questionId, answerId })),
            ),
          )}
        />
        <ActionToast state={state} />
        <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[6fr_4fr] md:gap-4">
            <QuizInfo
              title={title!}
              description={description!}
              difficulty={difficulty!}
              categories={categories!}
            />
            <QuizRecipientInfo
              recipient={recipient}
              errors={{
                [AuthFormField.EMAIL]: state.errors?.[AuthFormField.EMAIL],
                [AuthFormField.NAME]: state.errors?.[AuthFormField.NAME],
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[6fr_4fr] md:gap-4">
          <QuizQuestions
            isPending={isPending}
            currentQuestionIndex={currentQuestionIndex}
            handlePreviousQuestion={handlePreviousQuestion}
            handleNextQuestion={handleNextQuestion}
            question={currentQuestion}
            disabledPrevious={disabledPrevious}
            disabledNext={disabledNext}
            questionsLength={questionsLength}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswerIds={
              currentQuestion
                ? (selectedAnswersByQuestion[currentQuestion.id] ?? [])
                : []
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
      </form>
    </div>
  );
};
