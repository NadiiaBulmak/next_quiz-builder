'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';
import { Menu } from 'lucide-react';

export const ControlMenu = ({
  userId,
  mobileMenuOpened,
  toggleMobileMenu,
}: {
  userId: string | null;
  mobileMenuOpened: boolean;
  toggleMobileMenu: () => void;
}) => {
  return (
    <div className="">
      {userId ? (
        <Link
          href={ROUTES.QUIZZES.ALL}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 w-fit"
        >
          {CONTENT.main.navbar.to_dashboard}
        </Link>
      ) : (
        <>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 w-fit"
              aria-label={CONTENT.common.menu.open}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpened ? (
                <X
                  width={20}
                  height={20}
                  strokeWidth={3}
                  className="text-white"
                />
              ) : (
                <Menu
                  width={20}
                  height={20}
                  strokeWidth={3}
                  className="text-white"
                />
              )}
            </button>
          </div>
          <div className="hidden lg:flex gap-8 w-full items-center justify-center">
            <Link
              href={ROUTES.LOGIN}
              className="flex justify-center w-full text-sm font-bold text-slate-900 hover:underline hover:underline-offset-4 lg:w-fit transition-all duration-300"
            >
              {CONTENT.main.navbar.to_login}
            </Link>

            <Link
              href={ROUTES.REGISTER}
              className="flex justify-center w-fit rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
            >
              {CONTENT.main.navbar.to_register}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
