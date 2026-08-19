import { TOP_NAV_LINKS } from '@/constants/landing_nav_links';
import { NavMenuItem } from './NavMenuItem';
import type { NavMenuProps } from '@/types/props';

export const NavMenu = ({ isMobileNav = false, toggleMobileMenu, }: NavMenuProps) => {
  return (
    <nav
      className={` ${isMobileNav ? 'flex w-full flex-col items-center justify-start gap-2 py-8 sm:gap-3 sm:py-10' : 'hidden w-fit items-center lg:flex lg:flex-row lg:gap-20 lg:justify-center'}`}
    >
      {TOP_NAV_LINKS.map((link) => (
        <NavMenuItem
          key={link.name}
          href={link.href}
          name={link.name}
          isMobileNav={isMobileNav}
          toggleMobileMenu={toggleMobileMenu}
        />
      ))}
    </nav>
  );
};
