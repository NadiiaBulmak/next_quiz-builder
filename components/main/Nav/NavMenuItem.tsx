import Link from 'next/link';

export const NavMenuItem = ({ href, name, isMobileNav }: { href: string; name: string; isMobileNav: boolean }) => {
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
