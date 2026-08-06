'use client';
import { CONTENT } from '@/constants/content';
import AutoResizeTextarea from './AutoResizeTextarea';
import { LabelInputArea } from './LabelInputArea';
import { AnswerOptions } from './AnswerOptions';
import { QuestionControlSectionType, QuestionType } from '@/types/props';
import { QuestionSectionTop } from './QuestionSectionTop';
import { useState } from 'react';
import type { QuestionItemDragProps } from '@/types/props';

export const QuestionItem = ({
  id,
  text,
  order,
  answers,
  onDeleteQuestion,
  draggable,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
  onUpdateQuestionText,
  onUpdateQuestionAnswers,
}: QuestionType &
  Pick<QuestionControlSectionType, 'onDeleteQuestion'> &
  QuestionItemDragProps) => {
  const [extended, setExtended] = useState<boolean>(true);
  return (
    <div
      className="flex gap-6 flex-col p-4 border-[1.5px] border-lime-300 rounded-md"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <QuestionSectionTop
        order={order}
        setExtended={setExtended}
        extended={extended}
        onDeleteQuestion={onDeleteQuestion}
      />
      {extended && (
        <>
          <LabelInputArea label={CONTENT.create.questions.q_text}>
            <AutoResizeTextarea
              placeholder={CONTENT.create.questions.q_text_placeholder}
              value={text}
              onValueChange={(nextText) =>
                onUpdateQuestionText?.(id, order, nextText)
              }
            />
          </LabelInputArea>
          <LabelInputArea label={CONTENT.create.questions.a_options}>
            <AnswerOptions
              answers={answers}
              onChangeAnswers={(nextAnswers) =>
                onUpdateQuestionAnswers?.(id, order, nextAnswers)
              }
            />
          </LabelInputArea>
        </>
      )}

      {/* TODO: Explanation input, add to schema */}
      {/* <LabelInputArea label={CONTENT.create.questions.explanation}>
      <AutoResizeTextarea
        placeholder={CONTENT.create.questions.explanation_placeholder}
      />
    </LabelInputArea> */}
    </div>
  );
};
