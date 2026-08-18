import { CONTENT } from '@/constants/content';

export const QuizProgress = ({
  questions,
  isQuestionAnswered,
  isCurrentQuestion,
}: {
  questions: { id: string }[];
  isQuestionAnswered: (questionId: string) => boolean;
  isCurrentQuestion: (questionId: string) => boolean;
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-300 p-4 sm:p-6 lg:gap-3">
      <div className="font-semibold text-gray-600 text-sm">
        {CONTENT.shared_quiz.top.Quiz_Progress}
      </div>
      <div className="flex flex-wrap gap-3">
        {questions?.map((question, index) => (
          <div
            key={question.id}
            className={`h-12 w-12 shrink-0 rounded-md flex items-center justify-center text-base font-bold text-black border border-gray-300 ${
              isQuestionAnswered(question.id)
                ? 'bg-lime-100 border border-lime-500'
                : isCurrentQuestion(question.id)
                  ? 'bg-white'
                  : 'bg-gray-100'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="text-gray-500 flex gap-2 items-center text-sm">
          <div className="w-3 h-3 bg-lime-500 border border-gray-500 rounded-full text-xs"></div>
          {CONTENT.shared_quiz.progress.Answered}
        </div>
        <div className="text-gray-500 flex gap-2 items-center text-sm">
          <div className="w-3 h-3 bg-white border border-gray-500 rounded-full text-xs"></div>
          {CONTENT.shared_quiz.progress.Current}
        </div>
        <div className="text-gray-500 flex gap-2 items-center text-sm">
          <div className="w-3 h-3 bg-gray-100 border border-gray-500 rounded-full text-xs"></div>
          {CONTENT.shared_quiz.progress.Unanswered}
        </div>
      </div>
    </div>
  );
};
