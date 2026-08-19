import Link from 'next/link';
import { CONTENT } from '@/constants/content';
import { Lightbulb, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { NAV_LINKS } from '@/constants/nav_links';

export const AdsTips = () => {
  return (
    <div className="flex flex-col gap-5 rounded-md border border-gray-300 bg-lime-200 p-4 text-green-800 sm:p-6 lg:gap-6">
      <div className="flex gap-2 items-center">
        <Lightbulb />
        <h4 className="font-semibold">{CONTENT.shared_quiz.tips.about}</h4>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        {CONTENT.shared_quiz.tips.tips.map((tip, index) => (
          <p key={index}>{tip}</p>
        ))}
      </div>
      <Link href={NAV_LINKS.sign_in} target="_blank" className="w-full">
        <Button
          variant="outline"
          className="min-h-12 w-full justify-center font-bold text-gray-700 text-base p-4 flex items-center gap-3 rounded-md cursor-pointer lg:p-6"
        >
          {CONTENT.shared_quiz.tips.button.text}
          <SquareArrowOutUpRight
            strokeWidth={3}
            className="text-bold text-gray-700"
          />
        </Button>
      </Link>
    </div>
  );
};
