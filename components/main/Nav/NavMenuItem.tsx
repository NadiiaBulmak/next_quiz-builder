import Link from 'next/link';
import type { NavMenuItemProps } from '@/types/props';

export const NavMenuItem = ({ href, name, isMobileNav }: NavMenuItemProps) => {
  return (
    <Link
      key={name}
      href={href}
      className={`text-center w-fit font-medium text-slate-600 transition-all duration-200 hover:text-black ${isMobileNav ? 'text-2xl p-10' : 'text-sm'}`}
    >
      {name}
    </Link>
  );
};
