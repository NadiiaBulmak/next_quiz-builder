'use client';

import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';
import { NavMenu } from './NavMenu';
import { MobileTopBar } from './MobileTopBar';

export const MobileMenu = ({
  mobileMenuOpened,
  toggleMobileMenu,
}: {
  mobileMenuOpened: boolean;
  toggleMobileMenu: () => void;
}) => {
  return (
    <div
      aria-hidden={!mobileMenuOpened}
      className={`fixed inset-0 z-50 flex h-dvh w-screen flex-col items-center justify-start bg-black/50 transition-all duration-300 lg:hidden ${mobileMenuOpened ? 'translate-x-0 opacity-100' : 'pointer-events-none -translate-x-full opacity-0'}`}
    >
      <MobileTopBar
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpened={mobileMenuOpened}
      />
      <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-6 overflow-hidden bg-white px-5 pb-5 sm:px-8">
        <div className="min-h-0 w-full flex-1 overflow-y-auto">
          <NavMenu isMobileNav />
        </div>
        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-3 pb-[env(safe-area-inset-bottom)]">
          <Link
            href={ROUTES.LOGIN}
            className="flex min-h-12 w-full items-center justify-center rounded-lg border border-gray-500 bg-white px-4 py-3 text-base font-bold text-slate-900 shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 sm:max-w-md"
          >
            {CONTENT.main.navbar.to_login}
          </Link>

          <Link
            href={ROUTES.REGISTER}
            className="flex min-h-12 w-full items-center justify-center rounded-lg bg-black px-4 py-3 text-base font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 sm:max-w-md"
          >
            {CONTENT.main.navbar.to_register}
          </Link>
        </div>
      </div>
    </div>
  );
};
