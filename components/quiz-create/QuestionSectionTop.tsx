import { CONTENT } from "@/constants/content";
import { ChevronDown, ChevronUp, CopyPlus, GripVertical, Trash2 } from "lucide-react";

export const QuestionSectionTop = () => {
  return <div className="flex items center justify-between w-full gap-3">
    <div className="flex items-center gap-1">
        <GripVertical width={16} height={16} />
        <div className="text-sm font-semibold">{CONTENT.create.questions.item} N</div>
    </div>
    <div className="flex items-center gap-3">
        <CopyPlus width={16} height={16} />
        <Trash2 width={16} height={16} />
        <ChevronDown width={16} height={16} />
        {/* <ChevronUp width={20} height={20} /> */}
    </div>
  </div>;
};
