'use client';

import { QuestionInput } from "@/types/quiz";

export const QuizContent = ({
  questions,
}: {
  questions: QuestionInput[];
}) => {
  return <div className="max-w-1/2 w-full m-auto bg-white border border-gray-200 shadow-md">
    {questions.map((question, index) => (
      <div key={index} className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}`}</h3>
        <p className="text-gray-700 mb-2">{question.text}</p>
    </div>
  ))}
  </div>;
};
