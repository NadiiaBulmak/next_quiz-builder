import { CONTENT } from "@/constants/content";
import { LabelInputArea } from "./LabelInputArea";
import AutoResizeTextarea from "./AutoResizeTextarea";
import { AnswerOptions } from "./AnswerOptions";

export const QuestionSectionMain = () => {
  return <div className="flex gap-6 flex-col">
    <LabelInputArea label={CONTENT.create.questions.q_text}>
      <AutoResizeTextarea placeholder={CONTENT.create.questions.q_text_placeholder}/>
    </LabelInputArea>
    <LabelInputArea label={CONTENT.create.questions.a_options}>
      <AnswerOptions />
    </LabelInputArea>
    <LabelInputArea label={CONTENT.create.questions.explanation}>
      <AutoResizeTextarea placeholder={CONTENT.create.questions.explanation_placeholder}/>
    </LabelInputArea>
</div>;
};
