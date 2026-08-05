'use client';

import { useState } from 'react';
import { AnswerOptionItem } from './AnswerOptionItem';
import { QuestionSectionMain } from './QuestionSectionMain';
import { QuestionSectionTop } from './QuestionSectionTop';
import { AnswerType, QuestionControlSectionType } from '@/types/props';

export const QuestionsSection = ({
  questions,
}: Partial<QuestionControlSectionType>) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <QuestionSectionTop />
      <QuestionSectionMain />
    </div>
  );
};
