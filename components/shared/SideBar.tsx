'use client';

import { User } from '@/types/user';
import { SidebarMenu } from './SidebarMenu';
import { useEffect, useState } from 'react';
import { SideBarLogo } from './SidebarLogo';

export const SideBar = ({ name, email }: User) => {
  const [opened, setOpened] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      opened ? '15rem' : '5rem',
    );
  }, [opened]);

  return (
    <aside
      className={`
        fixed left-0 top-0 z-30
        hidden lg:flex
        h-screen max-h-screen
        flex-col gap-4
        overflow-visible
        border-r border-gray-300
        bg-white
        px-4
        shadow-lg
        transition-[width]
        duration-300
        ease-in-out
        ${opened ? 'w-[15rem]' : 'w-[5rem]'}
      `}
    >
      <div className="relative flex min-w-0 flex-1 flex-col gap-4">
        <SideBarLogo opened={opened} setOpened={setOpened} />
        <SidebarMenu opened={opened} />
      </div>
    </aside>
  );
};