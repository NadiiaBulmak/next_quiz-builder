import { Button } from '../ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const QuizControlSection = ({
  handlePrevious,
  handleNext,
  disabledPrevious,
  disabledNext,
}: {
  handlePrevious: () => void;
  handleNext: () => void;
  disabledPrevious: boolean;
  disabledNext: boolean;
}) => {
  return (
    <div className="py-4 w-full md:max-w-[75%] lg:max-w-1/2 mx-auto flex justify-between gap-3">
      <Button
        disabled={disabledPrevious}
        onClick={handlePrevious}
        className={`flex items-center gap-2 cursor-pointer ${disabledPrevious ? 'opacity-0 cursor-not-allowed' : ''}`}
      >
        <ArrowLeft />
        Previous
      </Button>
      <Button
        disabled={disabledNext}
        onClick={handleNext}
        className={`flex items-center gap-2 cursor-pointer ${disabledNext ? 'opacity-0 cursor-not-allowed' : ''}`}
      >
        Next <ArrowRight />
      </Button>
    </div>
  );
};
