import type { ReactNode } from 'react';
import type { QuestionType } from '@/types/props';

export type QuizDraft = {
  title: string;
  description: string;
  categories: string[];
  difficulty: string;
  questions: QuestionType[];
};

export type QuizCreateContextValue = {
  draft: QuizDraft;
  updateDraft: (changes: Partial<QuizDraft>) => void;
  resetDraft: () => void;
};

export type QuizCreateProviderProps = {
  children: ReactNode;
};