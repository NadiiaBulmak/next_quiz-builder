import { Button } from '../ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CONTENT } from '@/constants/content';

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
    <div className="mx-auto flex w-full justify-between gap-4 py-4 sm:gap-3 md:max-w-[75%] lg:max-w-1/2">
      <Button
        disabled={disabledPrevious}
        onClick={handlePrevious}
        className={`h-11 flex items-center gap-2 px-4 cursor-pointer lg:h-10 ${disabledPrevious ? 'opacity-0 cursor-not-allowed' : ''}`}
      >
        <ArrowLeft />
        {CONTENT.preview.previous}
      </Button>
      <Button
        disabled={disabledNext}
        onClick={handleNext}
        className={`h-11 flex items-center gap-2 px-4 cursor-pointer lg:h-10 ${disabledNext ? 'opacity-0 cursor-not-allowed' : ''}`}
      >
        {CONTENT.preview.next} <ArrowRight />
      </Button>
    </div>
  );
};
