import { CONTENT } from '@/constants/content';
import { Lightbulb, Link, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '../ui/button';

export const AdsTips = () => {
  return (
    <div className="bg-lime-200 p-6 rounded-md border border-gray-300 flex flex-col gap-6 text-green-800">
      <div className="flex gap-2 items-center">
        <Lightbulb />
        <h4 className="font-semibold">{CONTENT.shared_quiz.tips.about}</h4>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        {CONTENT.shared_quiz.tips.tips.map((tip, index) => (
          <p key={index}>{tip}</p>
        ))}
      </div>
      <Button
        variant="outline"
        className="font-bold text-gray-700 text-base p-6 flex items-center gap-3 rounded-md cursor-pointer"
      >
        {CONTENT.shared_quiz.tips.button.text}
        <SquareArrowOutUpRight
          strokeWidth={3}
          className="text-bold text-gray-700"
        />
      </Button>
    </div>
  );
};
