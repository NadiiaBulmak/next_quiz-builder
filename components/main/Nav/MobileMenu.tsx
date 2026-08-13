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
      className={`fixed inset-0 bg-black/50 z-50 flex flex-col items-center h-screen w-screen justify-start transition-all duration-300 md:hidden ${mobileMenuOpened ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
    >
      <MobileTopBar
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpened={mobileMenuOpened}
      />
      <div className="flex flex-col items-center gap-6 w-full px-6 h-full bg-white">
        <div className="flex-1 w-full" onClick={toggleMobileMenu}>
          <NavMenu isMobileNav />
        </div>
        <div className="flex flex-col gap-4 w-full items-center justify-center pb-12">
          <Link
            href={ROUTES.LOGIN}
            className="flex justify-center w-full rounded-lg bg-white border border-gray-500 p-5 text-sm text-xl font-bold text-slate-900 shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
          >
            {CONTENT.main.navbar.to_login}
          </Link>

          <Link
            href={ROUTES.REGISTER}
            className="flex justify-center w-full rounded-lg bg-black p-5 text-sm text-xl font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
          >
            {CONTENT.main.navbar.to_register}
          </Link>
        </div>
      </div>
    </div>
  );
};
