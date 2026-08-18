import Link from 'next/link';
import type { NavMenuItemProps } from '@/types/props';

export const NavMenuItem = ({ href, name, isMobileNav }: NavMenuItemProps) => {
  return (
    <Link
      key={name}
      href={href}
      className={`text-center w-full font-medium text-slate-600 transition-all duration-300 hover:text-black hover:underline hover:underline-offset-4 ${isMobileNav ? 'rounded-lg px-4 py-3 text-xl sm:text-2xl' : 'w-fit text-sm'}`}
    >
      {name}
    </Link>
  );
};
