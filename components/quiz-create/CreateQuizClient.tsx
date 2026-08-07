'use client';

// import { login } from '@/app/actions/auth/login';
import { QuestionsSection } from '@/components/quiz-create/Question/QuestionsSection';
import { QuizBaseInputSection } from '@/components/quiz-create/BaseInfo/QuizBaseInputSection';
import {
  defaultQuestion,
  initialQuestions,
  quizInitialState,
} from '@/constants/initialFormState';
import { AnswerType, CreateQuizClientProps, QuestionType } from '@/types/props';
import { useActionState, useState } from 'react';
import { postQuiz } from '@/app/actions/quiz/postQuiz';
import { TipSection } from '../shared/TipSection';
import { CONTENT } from '@/constants/content';

export const CreateQuizClient = ({ categories }: CreateQuizClientProps) => {
  const [state, action] = useActionState(postQuiz, quizInitialState);

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
    <form
      action={action}
      className="flex-1 min-h-screen  flex-1
  min-h-screen
  bg-gray-50
  px-3 md:px-6
  py-3 md:py-6
  grid
  grid-cols-1
  md:grid-cols-[4fr_6fr]
  md:gap-3
  w-full mb-20 lg:mb-0"
    >
      <input type="hidden" name="questions" value={JSON.stringify(questions)} />

      {/* <div className="col-span-full flex flex-col gap-3">
        {state?.errors && (
          <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            <p className="font-medium">Please fix the following:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {state.errors.title?.map((error) => (
                <li key={error}>{error}</li>
              ))}
              {state.errors.description?.map((error) => (
                <li key={error}>{error}</li>
              ))}
              {state.errors.categories?.map((error) => (
                <li key={error}>{error}</li>
              ))}
              {state.errors.difficulty?.map((error) => (
                <li key={error}>{error}</li>
              ))}
              {state.errors.questions?.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {state?.message && state.success && (
          <div className="rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-800">
            {state.message}
          </div>
        )}
      </div> */}

      <QuizBaseInputSection
        categories={categories}
        onAddQuestion={addNewQuestion}
        onDeleteQuestion={deleteQuestion}
        questions={questions}
      />
      <div>
        <QuestionsSection
          questions={questions}
          onDeleteQuestion={deleteQuestion}
          onReorderQuestions={reorderQuestions}
          onUpdateQuestionText={updateQuestionText}
          onUpdateQuestionAnswers={updateQuestionAnswers}
        />
        <TipSection content={CONTENT.create.base.question_tips} />
      </div>
    </form>
  );
};
