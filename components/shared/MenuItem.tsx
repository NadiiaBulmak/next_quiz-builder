'use client';

import Link from 'next/link';
import { useIsActiveLink } from '@/hooks/useIsActiveLink';
import { SidebarLinkType } from '@/types/props';
import { useState } from 'react';

export default function MenuItem({
  label,
  href,
  description,
  icon: Icon,
  iconVisible,
  labelVisible,
  opened = false,
}: SidebarLinkType) {
  const [active, setActive] = useState(false);
  const activeLink = useIsActiveLink(href);
  return (
    <Link
      href={href}
      prefetch={active}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`
  flex items-center p-2 px-3 rounded-md
  text-sm
  border
  lg:text-base
  font-regular

  hover:border-lime-500
  hover:shadow-[0_0_0_3px_rgba(132,204,22,0.15)]

  ${opened ? 'justify-start gap-1' : 'justify-center gap-0'}

  ${
    activeLink
      ? 'bg-black border-lime-500 text-white shadow-[0_0_0_3px_rgba(132,204,22,0.15)]'
      : 'border-transparent'
  }

  transition-all duration-300
`}
    >
      <span className="flex-shrink-0 flex items-center justify-center">
        {iconVisible && Icon ? (
          <Icon
            width={20}
            height={20}
            className={`${activeLink ? 'text-lime-200 ' : 'text-black'}`}
          />
        ) : null}
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-300 ${opened ? 'max-w-[12rem] opacity-100 ml-0' : 'max-w-0 opacity-0 ml-0'}`}
      >
        {labelVisible ? label : null}
      </span>
    </Link>
  );
}
