import Logo from './Logo';
import { CONTENT } from '@/constants/content';
import UserDropdown from './UserDropdown';
import { User } from '@/lib/generated/prisma/browser';

export default function MobileTopBar({
  name,
  email,
  opened = true,
  userMenuVisible = true,
  className = '',
  previewMode = false,
}: Pick<User, 'name' | 'email'> & {
  opened?: boolean;
  userMenuVisible?: boolean;
  className?: string;
  previewMode?: boolean;
}) {
  if (previewMode) {}
  
  return previewMode ? (
    <div className="flex justify-between lg:hidden px-4 py-8 w-full h-16 bg-white shadow-md border-0.5 border-gray-300">
      <Logo />
      {userMenuVisible && (
        <UserDropdown
          name="Preview User"
          email="example@example.com"
          opened={opened}
          className={className}
        />
      )}
    </div>
  ) : (
    <div className="flex justify-between lg:hidden px-4 py-8 w-full h-16 bg-white shadow-md border-0.5 border-gray-300">
      <Logo />
      {userMenuVisible && (
        <UserDropdown
          name={name}
          email={email}
          opened={opened}
          className={className}
        />
      )}
    </div>
  );
}
