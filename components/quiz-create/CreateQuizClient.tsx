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
import { useActionState, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postQuiz } from '@/app/actions/quiz/postQuiz';
import { TipSection } from '../shared/TipSection';
import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { QuizFormField } from '@/constants/formFields';

export const CreateQuizClient = ({
  categories,
  quiz,
  previewMode = false,
}: CreateQuizClientProps) => {
  const editCategories =
    quiz?.categories?.map((category) => category.name) ?? [];

  const normalizeQuestionOrder = (items: QuestionType[]) =>
    [...items]
      .sort((left, right) => left.order - right.order)
      .map((question, index) => ({
        ...question,
        order: index + 1,
      }));

  const editQuestions = normalizeQuestionOrder(
    quiz?.questions?.map((question) => ({
      ...question,
      id: question.id ?? crypto.randomUUID(),
      answers: (question.answers ?? []).map((answer, index) => ({
        id: answer.id ?? crypto.randomUUID(),
        text: answer.text,
        isCorrect: answer.isCorrect,
        order: answer.order ?? index + 1,
      })),
    })) ?? [],
  );

  const initialState = quiz
    ? {
        ...quizInitialState,
        user: {
          title: quiz.title ?? '',
          description: quiz.description ?? '',
          categories: editCategories,
          difficulty: quiz.difficulty?.name ?? '',
          questions: editQuestions,
        },
      }
    : quizInitialState;

  const [state, action, isPending] = useActionState(postQuiz, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.quizzes.my);
    }
  }, [router, state?.success]);

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
    quiz
      ? withQuestionIds(normalizeQuestionOrder(editQuestions))
      : withQuestionIds(normalizeQuestionOrder(initialQuestions)),
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
  console.log(previewMode, 'previewMode');

  return (
    <>
      <form
        action={previewMode ? undefined : action}
        className="flex-1 min-h-screen  flex-1 min-h-screen bg-gray-50 px-3 md:px-6 py-3 md:py-6 grid grid-cols-1 md:grid-cols-[4fr_6fr] md:gap-3 w-full mb-20 lg:mb-0"
      >
        <ActionToast state={state} />
        {previewMode && (
          <div className="mb-3 md:mb-0 order-first md:order-last">
            <TipSection content="Form is not active due to preview mode" />
          </div>
        )}
        <input
          type="hidden"
          name={QuizFormField.QUIZ_ID}
          value={quiz?.id ?? ''}
        />
        <input
          type="hidden"
          name={QuizFormField.QUESTIONS}
          value={JSON.stringify(questions)}
        />
        <QuizBaseInputSection
          categories={categories}
          initialTitle={initialState.user?.title}
          initialDescription={initialState.user?.description}
          initialDifficulty={initialState.user?.difficulty}
          initialSelectedCategories={editCategories}
          isEditMode={Boolean(quiz)}
          isPending={isPending}
          errors={state.errors}
          onAddQuestion={addNewQuestion}
          onDeleteQuestion={deleteQuestion}
          questions={questions}
        />
        <div className="flex flex-col gap-3">
          <FieldError
            id="quiz-questions-error"
            errors={state.errors?.[QuizFormField.QUESTIONS]}
          />
          <QuestionsSection
            questions={questions}
            onDeleteQuestion={deleteQuestion}
            onReorderQuestions={reorderQuestions}
            onUpdateQuestionText={updateQuestionText}
            onUpdateQuestionAnswers={updateQuestionAnswers}
          />
          {!previewMode && (
            <TipSection content={CONTENT.create.base.question_tips} />
          )}
        </div>
      </form>
    </>
  );
};
