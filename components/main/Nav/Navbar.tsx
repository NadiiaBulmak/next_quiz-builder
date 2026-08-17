'use client';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';
import Logo from '@/components/shared/Logo';
import { NavMenu } from './NavMenu';
import { ControlMenu } from './ControlMenu';
import { verifySession } from '@/services/sessions';
import { useState } from 'react';
import type { NavbarProps } from '@/types/props';

export function Navbar({ userId }: NavbarProps) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpened((prev) => !prev);
  };
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100/80 shadow-md bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-[85rem] items-center justify-between px-6">
          <Logo />
          <NavMenu isMobileNav={false} />
          <ControlMenu
            userId={userId}
            mobileMenuOpened={mobileMenuOpened}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </header>
      {/* {mobileMenuOpened && ( */}
      <MobileMenu
        mobileMenuOpened={mobileMenuOpened}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* )} */}
    </>
  );
}
