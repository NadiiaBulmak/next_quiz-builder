'use client';

import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';
import { rejectIframeNavigation } from '@/utils/rejectIframeNavigation';
import Link from 'next/link';

export const ToSignInButton = () => (
  <Link
    href={NAV_LINKS.sign_in}
    onClick={rejectIframeNavigation}
    className="flex items-center gap-2 transition-all duration-300"
  >
    <div className="flex items-center gap-2 transition-all duration-300">
      <div className="font-medium text-gray-500 hover:underline hover:underline-offset-2 transition-all duration-300">
        {CONTENT.shared_quiz.cta.title}
      </div>
      <div className="font-bold p-2 rounded-full bg-lime-200 text-green-800">
        {CONTENT.shared_quiz.cta.product}
      </div>
      {CONTENT.shared_quiz.cta.icon && (
        <CONTENT.shared_quiz.cta.icon
          strokeWidth={2}
          className="text-gray-500"
          width={20}
          height={20}
        />
      )}
    </div>
  </Link>
);
