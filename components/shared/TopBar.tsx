'use client';
import { getNavTitle } from '@/utils/getNavTitle';
import UserDropdown from './UserDropdown';
import { User } from '@/lib/generated/prisma/browser';

export default function TopBar({
  name,
  email,
  opened = true,
  userMenuVisible = true,
}: Pick<User, 'name' | 'email'> & {
  opened?: boolean;
  userMenuVisible?: boolean;
}) {
  const { label, description } = getNavTitle();
  return (
    <div className="flex items-center justify-between bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700 sticky top-0 z-20">
      <div className="flex flex-col gap-0 ml-3">
        <h1 className="text-lg font-bold">{label}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {userMenuVisible && (
        <UserDropdown name={name} email={email} opened={opened} />
      )}
    </div>
  );
}
