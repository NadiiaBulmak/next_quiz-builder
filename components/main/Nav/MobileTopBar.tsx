import { ControlMenu } from './ControlMenu';
// Correct the file name to MobileMenuTopBar.tsx

// Correct the file name to MobileMenuTopBar.tsx
import Logo from '@/components/shared/Logo';

export const MobileTopBar = ({
  toggleMobileMenu,
  mobileMenuOpened,
}: {
  toggleMobileMenu: () => void;
  mobileMenuOpened: boolean;
}) => {
  return (
    <header className="sticky top-0 z-50 shadow-md w-full bg-white">
      <div className="mx-auto flex h-18 max-w-[85rem] items-center justify-between px-6">
        <Logo />
        {/* <NavMenu /> */}
        <ControlMenu userId={null} mobileMenuOpened={mobileMenuOpened} toggleMobileMenu={toggleMobileMenu} />
      </div>
    </header>
  );
};
