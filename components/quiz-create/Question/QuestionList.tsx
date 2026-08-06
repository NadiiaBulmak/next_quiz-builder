import { useRef } from 'react';
import { QuestionControlSectionType } from '@/types/props';
import { QuestionItem } from './QuestionItem';

export const QuestionList = ({
  questions,
  onDeleteQuestion,
  onReorderQuestions,
  onUpdateQuestionText,
  onUpdateQuestionAnswers,
}: Omit<QuestionControlSectionType, 'onAddQuestion'>) => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleSort = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;

    onReorderQuestions(dragItem.current, dragOverItem.current);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <>
      {questions?.map((question, idx) => (
        <QuestionItem
          key={question.id ?? `${question.order}-${idx}`}
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQuestionText={onUpdateQuestionText}
          onUpdateQuestionAnswers={onUpdateQuestionAnswers}
          draggable
          onDragStart={() => {
            dragItem.current = idx;
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            dragOverItem.current = idx;
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleSort}
          {...question}
        />
      ))}
    </>
  );
};
