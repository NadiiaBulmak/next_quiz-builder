import { ShowAllQuizType } from '@/types/props';
import { Button } from '../ui/button';

export const QuizListItemBottomContent = ({ showAllQuiz }: ShowAllQuizType) => {
  return (
    <div className="flex justify-between">
      {showAllQuiz && (
        <Button className="bg-lime-300 p-2 rounded-md font-semibold w-fit text-black px-3 hover:bg-lime-100 hover:border-1 hover:border-lime-300 cursor-pointer">
          Start Quiz
        </Button>
      )}
      {!showAllQuiz && (
        <div className="flex gap-2 w-full">
          <Button className="bg-white border-gray-500 p-2 rounded-md font-semibold text-black px-3 hover:bg-gray-100 cursor-pointer w-1/2">
            Edit
          </Button>
          <Button className="w-1/2 bg-black p-2 rounded-md font-semibold text-white px-3 hover:bg-lime-100 hover:border-1 hover:border-gray-500 hover:text-black cursor-pointer">
            Preview
          </Button>
        </div>
      )}
    </div>
  );
};
