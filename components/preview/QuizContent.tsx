'use client';

import type { QuizContentProps } from '@/types/props';
import { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizControlSection } from './QuizControlSection';
import { QuizContentBottom } from './QuizContentBottom';

export const QuizContent = ({ questions }: QuizContentProps) => {
  const [question, SetQuestion] = useState(questions[0]);
  const [index, setindex] = useState(0);
  const handlePrevious = () => {
    setindex((prev) => prev - 1);
    SetQuestion(questions[index - 1]);
  };
  const handleNext = () => {
    setindex((prev) => prev + 1);
    SetQuestion(questions[index + 1]);
  };
  const disabledPrevious = index === 0;
  const disabledNext = index === questions.length - 1;
  return (
    <>
      <QuizControlSection
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        disabledPrevious={disabledPrevious}
        disabledNext={disabledNext}
      />
      <QuizQuestion question={question} index={index} />
      <QuizContentBottom />
    </>
  );
};
