import { CONTENT } from '@/constants/content';
import { TOP_NAV_LINKS } from '@/constants/landing_nav_links';
import { NavMenuItem } from './NavMenuItem';
import type { NavMenuProps } from '@/types/props';

export const NavMenu = ({ isMobileNav = false }: NavMenuProps) => {
  return (
    <nav
      className={` ${isMobileNav ? 'flex flex-col justify-center w-full items-center py-20' : 'hidden w-fit items-center lg:flex lg:flex-row lg:gap-20 lg:justify-center'}`}
    >
      {TOP_NAV_LINKS.map((link) => (
        <NavMenuItem
          key={link.name}
          href={link.href}
          name={link.name}
          isMobileNav={isMobileNav}
        />
      ))}
    </nav>
  );
};
