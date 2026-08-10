'use client';

import { User } from '@/types/user';
import Logo from './Logo';
import SidebarMenu from './SidebarMenu';
import { useEffect, useState } from 'react';

export default function SideBar({ name, email }: User) {
  const [opened, setOpened] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      opened ? '15rem' : '5rem',
    );
  }, [opened]);

  return (
    <div
      className={`hidden lg:flex flex-col fixed left-0 top-0 z-30 gap-4 h-screen max-h-screen bg-white px-4 shadow-lg border-r border-gray-300 overflow-visible transition-[width] duration-300 ease-in-out ${opened ? 'w-[15rem]' : 'w-[5rem]'}`}
    >
      <div className="flex-1 flex flex-col gap-4 min-w-0 relative">
        <Logo opened={opened} setOpened={setOpened} />
        <SidebarMenu opened={opened} />
      </div>

      {/* <SidebarBottom name={name} email={email} opened={opened} /> */}
    </div>
  );
}
