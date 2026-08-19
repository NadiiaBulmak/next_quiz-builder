'use client';

import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';
import { rejectIframeNavigation } from '@/utils/rejectIframeNavigation';

export const ToDashboardButton = () => (
  <Link
    href={ROUTES.QUIZZES.ALL}
    className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 w-fit"
    onClick={rejectIframeNavigation}
  >
    {CONTENT.main.navbar.to_dashboard}
  </Link>
);
