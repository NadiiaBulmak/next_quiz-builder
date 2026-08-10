'use client';

import { useState } from 'react';
import { ShowAllQuizType } from '@/types/props';
import { Button } from '../ui/button';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/nav_links';
import { CheckCheck, Link as LinkIcon } from 'lucide-react';

export const QuizListItemBottomContent = ({
  showAllQuiz,
  id,
}: ShowAllQuizType & { id: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/quiz/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex justify-between">
      {showAllQuiz && (
        <Button className="bg-lime-300 p-2 rounded-md font-semibold w-fit text-black px-3 hover:bg-lime-100 hover:border-1 hover:border-lime-300 cursor-pointer">
          Start Quiz
        </Button>
      )}
      {!showAllQuiz && (
        <div className="flex gap-2 w-full">
          <Link href={`${NAV_LINKS.edit}/${id}`} className="max-w-1/2 w-full">
            <Button className="bg-white border-gray-500 p-2 rounded-md font-semibold text-black px-3 hover:bg-gray-100 cursor-pointer w-full">
              Edit
            </Button>
          </Link>
          <Link
            href={`${NAV_LINKS.preview}/${id}`}
            className="max-w-1/2 w-full"
          >
            <Button className="w-full rounded-md border border-black bg-black px-3 py-2 font-semibold text-white cursor-pointer transition-all duration-150 hover:bg-black hover:border-lime-500 hover:shadow-[0_0_0_2px_rgba(132,204,22,0.25)]">
              Preview
            </Button>
          </Link>

          <Button
            className="rounded-md border border-black bg-black px-3 py-2 font-semibold text-white cursor-pointer transition-all duration-150 hover:bg-black hover:border-lime-500 hover:shadow-[0_0_0_2px_rgba(132,204,22,0.25)]"
            onClick={handleCopyLink}
          >
            {!copied ? (
              <LinkIcon width={24} height={24} />
            ) : (
              <CheckCheck width={24} height={24} />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
