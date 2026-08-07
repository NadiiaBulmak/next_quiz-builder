'use client';
import { getNavTitle } from '@/utils/getNavTitle';
import SidebarBottom from './SidebarBottom';

export default function TopBar({
  name,
  email,
  opened = true,
}: {
  name: string;
  email: string;
  opened?: boolean;
}) {
  const { label, description } = getNavTitle();
  return (
    <div className="flex items-center justify-between bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700">
      <div className="flex flex-col gap-0 ml-3">
        <h1 className="text-lg font-bold">{label}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <SidebarBottom name={name} email={email} opened={opened} />
    </div>
  );
}
