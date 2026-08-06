'use client';

import { QuestionsSection } from '@/components/quiz-create/QuestionsSection';
import { QuizBaseInputSection } from '@/components/quiz-create/QuizBaseInputSection';
import {
  defaultQuestion,
  initialQuestions,
} from '@/constants/initialFormState';
import { AnswerType, CreateQuizClientProps, QuestionType } from '@/types/props';
import { useState } from 'react';

export const CreateQuizClient = ({ categories }: CreateQuizClientProps) => {
  const withAnswerIds = (answers: AnswerType[]) =>
    answers.map((answer) => ({
      ...answer,
      id: answer.id ?? crypto.randomUUID(),
    }));

  const withQuestionIds = (items: QuestionType[]) =>
    items.map((question) => ({
      ...question,
      id: question.id ?? crypto.randomUUID(),
      answers: withAnswerIds(question.answers),
    }));

  const [questions, setQuestions] = useState<QuestionType[]>(() =>
    withQuestionIds(initialQuestions),
  );

  const addNewQuestion = () =>
    setQuestions((prev) => [
      ...prev,
      {
        ...defaultQuestion,
        id: crypto.randomUUID(),
        order: prev.length + 1,
        answers: withAnswerIds(defaultQuestion.answers),
      },
    ]);

  const rewriteOrderIndex = (questions: QuestionType[]) =>
    questions.map((question, index) => ({
      ...question,
      order: index + 1,
    }));

  const deleteQuestion = (order: number) => {
    setQuestions((prev) =>
      rewriteOrderIndex(prev.filter((p) => p.order !== order)),
    );
  };

  const reorderQuestions = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;

    setQuestions((prev) => {
      const updated = [...prev];
      const [draggedQuestion] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, draggedQuestion);

      return rewriteOrderIndex(updated);
    });
  };

  const updateQuestionText = (
    questionId: string | undefined,
    order: number,
    text: string,
  ) => {
    setQuestions((prev) =>
      prev.map((question) => {
        const isTarget = questionId
          ? question.id === questionId
          : question.order === order;

        return isTarget ? { ...question, text } : question;
      }),
    );
  };

  const updateQuestionAnswers = (
    questionId: string | undefined,
    order: number,
    answers: QuestionType['answers'],
  ) => {
    setQuestions((prev) =>
      prev.map((question) => {
        const isTarget = questionId
          ? question.id === questionId
          : question.order === order;

        return isTarget ? { ...question, answers } : question;
      }),
    );
  };

  return (
    <div className="flex-1 min-h-screen bg-white px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-6 w-full">
      <QuizBaseInputSection
        categories={categories}
        onAddQuestion={addNewQuestion}
        onDeleteQuestion={deleteQuestion}
        questions={questions}
      />
      <QuestionsSection
        questions={questions}
        onDeleteQuestion={deleteQuestion}
        onReorderQuestions={reorderQuestions}
        onUpdateQuestionText={updateQuestionText}
        onUpdateQuestionAnswers={updateQuestionAnswers}
      />
    </div>
  );
};
