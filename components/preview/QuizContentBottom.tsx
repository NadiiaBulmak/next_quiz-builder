import { TipSection } from '../shared/TipSection';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';

export const QuizContentBottom = () => (
  <div className="w-full md:max-w-[75%] lg:max-w-1/2 mx-auto flex flex-col items-end gap-3">
    <TipSection content={CONTENT.preview.submit_disabled_tip} />
    <Button
      disabled={true}
      className="h-fit min-w-[30%] opacity-0 cursor-not-allowed text-xl font-semibold bg-lime-300 p-2 rounded-md w-fit text-black px-3 hover:bg-lime-100 hover:border-1 hover:border-lime-300 cursor-pointer"
    >
      {CONTENT.preview.submit}
    </Button>
  </div>
);
