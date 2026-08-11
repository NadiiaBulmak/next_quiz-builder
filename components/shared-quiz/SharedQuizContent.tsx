import { Quiz } from '@/types/quiz';
import { QuizInfo } from './QuizInfo';
import { QuizQuestions } from './QuizQuestions';
import { CONTENT } from '@/constants/content';

export default function SharedQuizContent({
  title,
  description,
  questions,
  difficulty,
  categories,
}: Partial<Quiz>) {
  return (
    <div className="px-6 md:px-8 md:px-8 py-6">
      <div className="flex flex-col gap-4 bg-white shadow-md w-full rounded-md p-4 justify-between  px-6 md:px-8 md:px-8 py-6">
        <QuizInfo
          title={title!}
          description={description!}
          difficulty={difficulty!}
          categories={categories!}
        />
        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-4">
          <QuizQuestions questions={questions!} />
          <div className="flex flex-col gap-4">
            <div className=" p-6 rounded-md border border-gray-300 flex flex-col gap-3">
              <div className="font-bold">Quiz Progress</div>
              <div className="flex gap-3 flex-wrap">
                {questions?.map((question, index) => (
                  <div
                    key={question.id}
                    className="w-12 h-12 rounded-md bg-gray-300 flex items-center justify-center text-base font-bold text-black"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="text-gray-500 flex gap-1 items-center">
                  <div className="w-4 h-4 bg-green-500 border border-gray-500 rounded-full"></div>
                  {CONTENT.shared_quiz.progress.Answered}
                </div>
                <div className="text-gray-500 flex gap-1 items-center">
                  <div className="w-4 h-4 bg-white border border-gray-500 rounded-full"></div>
                  {CONTENT.shared_quiz.progress.Current}
                </div>
                <div className="text-gray-500 flex gap-1 items-center">
                  <div className="w-4 h-4 bg-gray-500 border border-gray-500 rounded-full"></div>
                  {CONTENT.shared_quiz.progress.Unanswered}
                </div>
              </div>
            </div>
            <div className=" p-6 rounded-md border border-gray-300 flex flex-col gap-3">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
