'use client';

import { Quiz } from '@/types/quiz';
import { ArrowRight, Circle, CircleCheck, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { QuestionAnswerList } from './QuestionAnswerList';

export const QuizQuestions = ({
  questions,
}: {
  questions: Pick<Quiz, 'questions'>['questions'];
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(
    questions && questions.length > 0 ? questions[currentQuestionIndex] : null,
  );
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setQuestion(questions[nextIndex]);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setQuestion(questions[prevIndex]);
    }
  };

  const disabledNext = currentQuestionIndex >= questions.length - 1;
  const disabledPrevious = currentQuestionIndex <= 0;

  return (
    <div className="flex flex-col gap-4 p-6 rounded-md border border-gray-300">
      <div className="font-semibold text-gray-600 text-sm">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <div className="font-semibold text-base">{question?.text}</div>
      <QuestionAnswerList answers={question?.answers || []} />
      <div className="flex justify-between">
        <Button
          className="self-end w-fit p-6 text-lime-300 flex items-center gap-2 rounded-md"
          onClick={handlePreviousQuestion}
          disabled={disabledPrevious}
        >
          <ArrowLeft />
          {CONTENT.shared_quiz.buttons.previous}
        </Button>
        <Button
          className="self-end w-fit p-6 text-lime-300 flex items-center gap-2 rounded-md"
          onClick={handleNextQuestion}
          disabled={disabledNext}
        >
          {CONTENT.shared_quiz.buttons.next}
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
