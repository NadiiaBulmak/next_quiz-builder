import type { QuizResultOverview } from '@/types/props';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { Button } from '../../ui/button';
import { CopyPreviewLinkButton } from '../../quiz/CopyPreviewLinkButton';

export const QuizActions = ({ quiz }: { quiz: QuizResultOverview }) => {
  return (
    <div className="flex shrink-0 gap-2">
      <Link href={`${NAV_LINKS.quizzes.results}/${quiz.id}`}>
        <Button
          className=" cursor-pointer
                      rounded-md
                      border
                      border-black
                      bg-black
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-150
                      hover:border-lime-500
                      hover:bg-black
                      hover:shadow-[0_0_0_2px_rgba(132,204,22,0.25)]
                    "
        >
          {CONTENT.results.buttons.view_results}
        </Button>
      </Link>

      <CopyPreviewLinkButton id={quiz.id} />
    </div>
  );
};
