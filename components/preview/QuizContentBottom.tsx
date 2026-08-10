import { TipSection } from '../shared/TipSection';
import { Button } from '../ui/button';

export const QuizContentBottom = () => (
  <div className="w-full md:max-w-[75%] lg:max-w-1/2 mx-auto flex flex-col items-end gap-3">
    <TipSection content="Submit button is disabled due to preview mode" />
    <Button
      disabled={true}
      className="h-fit min-w-[30%] opacity-0 cursor-not-allowed text-xl font-semibold bg-lime-300 p-2 rounded-md w-fit text-black px-3 hover:bg-lime-100 hover:border-1 hover:border-lime-300 cursor-pointer"
    >
      Submit
    </Button>
  </div>
);
