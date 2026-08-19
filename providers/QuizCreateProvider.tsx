'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { initialQuestions } from '@/constants/initialFormState';
import type {
  QuizCreateContextValue,
  QuizCreateProviderProps,
  QuizDraft,
} from '@/types/quizCreate';

const createInitialDraft = (): QuizDraft => ({
  title: '',
  description: '',
  categories: [],
  difficulty: '',
  questions: initialQuestions,
});

const QuizCreateContext = createContext<QuizCreateContextValue | null>(null);

export const QuizCreateProvider = ({ children }: QuizCreateProviderProps) => {
  const [draft, setDraft] = useState<QuizDraft>(createInitialDraft);

  const updateDraft = useCallback((changes: Partial<QuizDraft>) => {
    setDraft((currentDraft) => ({ ...currentDraft, ...changes }));
  }, []);

  const resetDraft = useCallback(() => {
    setDraft(createInitialDraft());
  }, []);

  const value = useMemo(
    () => ({ draft, updateDraft, resetDraft }),
    [draft, updateDraft, resetDraft],
  );

  return (
    <QuizCreateContext.Provider value={value}>
      {children}
    </QuizCreateContext.Provider>
  );
};

export const useQuizCreate = () => {
  const context = useContext(QuizCreateContext);

  if (!context) {
    throw new Error('useQuizCreate must be used within a QuizCreateProvider');
  }

  return context;
};
