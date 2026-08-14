'use client';
// import { usePathname } from 'next/navigation';
import UserDropdown from './UserDropdown';
import { User } from '@/lib/generated/prisma/browser';
import { useNavTitle } from '@/utils/getNavTitle';
import { BackButton } from './BackButton';
import { usePathname } from 'next/navigation';

export default function TopBar({
  name,
  email,
  opened = true,
  userMenuVisible = true,
  className = '',
}: Pick<User, 'name' | 'email'> & {
  opened?: boolean;
  userMenuVisible?: boolean;
  className?: string;
}) {
  const { label, description } = useNavTitle();
  const pathname = usePathname();
  const isDetailedPage =
    pathname.includes('/quizzes/results/') &&
    !pathname.endsWith('/quizzes/results');
  return (
    <div className="flex gap-1 flex-row items-center lg:justify-between bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700 sticky top-0 z-20 w-full">
      <div className="flex flex-row items-center gap-3 lg:ml-3">
        {isDetailedPage && (
          // <div className="flex items-center gap-3">
          <BackButton />
          // </div>
        )}

        <div className="flex flex-col gap-0">
          <h1 className="text-lg font-bold">{label}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
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
