import { CONTENT } from "@/constants/content";
import { Button } from "../ui/button";
import { QuestionControlSectionType } from "@/types/props";

export const QuestionControlSection = ({onAddQuestion}: Partial<QuestionControlSectionType>) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button className="w-full rounded-sm py-4" variant="outline" onClick={onAddQuestion}>
        {CONTENT.create.buttons.add_question}
      </Button>
      <Button className="w-full rounded-sm py-4">
        {CONTENT.create.buttons.save}
      </Button>
    </div>
  );
};
