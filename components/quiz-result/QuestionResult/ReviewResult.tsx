import { QuestionResultList } from './QuestionResultList';
import { CONTENT } from '@/constants/content';

export const ReviewResult = ({
  answers,
}: {
  answers: Array<{
    id: string;
    questionText: string;
    answerText: string;
    isCorrect: boolean;
  }>;
}) => {
  return (
    <section>
      <div className="mb-4 flex flex-col items-start gap-3 md:flex-row md:items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold text-gray-950">
            {CONTENT.quiz_result.review.title}
          </h2>
          <p className="text-sm text-gray-500">
            {CONTENT.quiz_result.review.description}
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {CONTENT.quiz_result.review.question_count(answers.length)}
        </span>
      </div>

      <QuestionResultList answers={answers} />
    </section>
  );
};
