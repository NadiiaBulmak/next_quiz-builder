import Link from 'next/link';
import type { NavMenuItemProps } from '@/types/props';

export const NavMenuItem = ({ href, name, isMobileNav }: NavMenuItemProps) => {
  return (
    <Link
      key={name}
      href={href}
      className={`text-center w-fit font-medium text-slate-600 hover:text-black hover:underline hover:underline-offset-4 transition-all duration-300 ${isMobileNav ? 'text-2xl p-10' : 'text-sm'}`}
    >
      {name}
    </Link>
  );
};
