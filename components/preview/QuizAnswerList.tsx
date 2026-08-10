import { AnswerInput } from "@/types/quiz";
import { Circle } from "lucide-react";
import { QuizAnswerItem } from "./QuizAnswerItem";

export const QuizAnswerList = ({ answers }: { answers: AnswerInput[] }) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {answers.map((answer, answerIndex) => (
        <QuizAnswerItem text={answer.text} index={answerIndex} key={answerIndex} />
      ))}
    </div>
  );
};
  