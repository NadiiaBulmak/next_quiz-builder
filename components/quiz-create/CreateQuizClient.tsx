'use client';

import { QuestionsSection } from '@/components/quiz-create/Question/QuestionsSection';
import { QuizBaseInputSection } from '@/components/quiz-create/BaseInfo/QuizBaseInputSection';
import {
  defaultQuestion,
  quizInitialState,
} from '@/constants/initialFormState';
import { AnswerType, CreateQuizClientProps, QuestionType } from '@/types/props';
import { useActionState, useEffect, useMemo, useRef } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useRouter } from 'next/navigation';
import { postQuiz } from '@/app/actions/quiz/postQuiz';
import { TipSection } from '../shared/TipSection';
import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { QuizFormField } from '@/constants/formFields';
import { useQuizCreate } from '@/providers/QuizCreateProvider';

const normalizeQuestionOrder = (items: QuestionType[]) =>
  [...items]
    .sort((left, right) => left.order - right.order)
    .map((question, index) => ({
      ...question,
      order: index + 1,
    }));

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

export const CreateQuizClient = ({
  categories,
  quiz,
  previewMode = false,
}: CreateQuizClientProps) => {
  useScrollToTop();
  const { draft, updateDraft, resetDraft } = useQuizCreate();
  const initializedQuizId = useRef<string | undefined>(undefined);
  const editCategories = useMemo(
    () => quiz?.categories?.map((category) => category.name) ?? [],
    [quiz?.categories],
  );

  const editQuestions = useMemo(
    () =>
      normalizeQuestionOrder(
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
      ),
    [quiz?.questions],
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
    if (!quiz || initializedQuizId.current === quiz.id) return;

    updateDraft({
      title: quiz.title ?? '',
      description: quiz.description ?? '',
      categories: editCategories,
      difficulty: quiz.difficulty?.name ?? '',
      questions: withQuestionIds(normalizeQuestionOrder(editQuestions)),
    });
    initializedQuizId.current = quiz.id;
  }, [quiz, editCategories, editQuestions, updateDraft]);

  useEffect(() => {
    if (state?.success) {
      resetDraft();
      router.push(NAV_LINKS.quizzes.my);
    }
  }, [resetDraft, router, state?.success]);

  const questions = draft.questions;

  const addNewQuestion = () =>
    updateDraft({
      questions: [
        ...questions,
        {
          ...defaultQuestion,
          id: crypto.randomUUID(),
          order: questions.length + 1,
          answers: withAnswerIds(defaultQuestion.answers),
        },
      ],
    });

  const rewriteOrderIndex = (questions: QuestionType[]) =>
    questions.map((question, index) => ({
      ...question,
      order: index + 1,
    }));

  const deleteQuestion = (order: number) => {
    updateDraft({
      questions: rewriteOrderIndex(questions.filter((p) => p.order !== order)),
    });
  };

  const reorderQuestions = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;

    const updated = [...questions];
    const [draggedQuestion] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, draggedQuestion);
    updateDraft({ questions: rewriteOrderIndex(updated) });
  };

  const updateQuestionText = (
    questionId: string | undefined,
    order: number,
    text: string,
  ) => {
    updateDraft({
      questions: questions.map((question) => {
        const isTarget = questionId
          ? question.id === questionId
          : question.order === order;

        return isTarget ? { ...question, text } : question;
      }),
    });
  };

  const updateQuestionAnswers = (
    questionId: string | undefined,
    order: number,
    answers: QuestionType['answers'],
  ) => {
    updateDraft({
      questions: questions.map((question) => {
        const isTarget = questionId
          ? question.id === questionId
          : question.order === order;

        return isTarget ? { ...question, answers } : question;
      }),
    });
  };

  return (
    <>
      <form
        action={previewMode ? undefined : action}
        className={`flex-1 min-h-screen  flex-1 min-h-screen bg-gray-50 px-3 md:px-6 py-3 md:py-6 grid grid-cols-1 md:grid-cols-[4fr_6fr] md:gap-3 w-full lg:mb-0 ${previewMode ? 'mb-0' : 'mb-20'}`}
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
          title={draft.title}
          description={draft.description}
          difficulty={draft.difficulty}
          selectedCategories={draft.categories}
          onTitleChange={(title) => updateDraft({ title })}
          onDescriptionChange={(description) => updateDraft({ description })}
          onCategoriesChange={(categories) => updateDraft({ categories })}
          onDifficultyChange={(difficulty) => updateDraft({ difficulty })}
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
