import { Check, X } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { QuestionResult } from './QuestionResult';

export function QuestionResultList({ answers }: { answers: Array<{ id: string; questionText: string; answerText: string; isCorrect: boolean }> }) {
  return (
    <div className="flex flex-col gap-3">
      {answers.map((answer, index) => (
        <QuestionResult
          key={answer.id}
          index={index + 1}
          question={answer.questionText}
          answer={answer.answerText}
          isCorrect={answer.isCorrect}
        />
      ))}
    </div>
  );
}
