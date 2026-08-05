'use client';

import { QuestionsSection } from '@/components/quiz-create/QuestionsSection';
import { QuizBaseInputSection } from '@/components/quiz-create/QuizBaseInputSection';
import {
  defaultQuestion,
  initialQuestions,
} from '@/constants/initialFormState';
import { QuestionType } from '@/types/props';
import type { Category } from './CategorySelectClient';
import { useState } from 'react';

type Props = {
  categories: Category[];
};

export const CreateQuizClient = ({ categories }: Props) => {
  const [questions, setQuestions] = useState<QuestionType[]>(initialQuestions);

  const addNewQuestion = () =>
    setQuestions((prev) => [...prev, defaultQuestion]);
  return (
    <div className=" flex-1 min-h-screen bg-white px-3 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      <QuizBaseInputSection
        categories={categories}
        onAddQuestion={addNewQuestion}
        questions={questions}
      />
      <QuestionsSection questions={questions} />
    </div>
  );
};
