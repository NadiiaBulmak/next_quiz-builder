'use client';

import Link from 'next/link';
import { BOTTOM_SIDEBAR_LINK } from '@/constants/sidebar_links';
import { SidebarBottomType } from '@/types/props';
import { ArrowDown, ChevronDown, ChevronUp, Dot } from 'lucide-react';

export default function SidebarBottom({
  name,
  email,
  opened = false,
}: SidebarBottomType) {
  return (
    <Link
      href={BOTTOM_SIDEBAR_LINK.href}
      className="p-1 flex items-center gap-3 cursor-pointer items-center border rounded-md border-lime-500 hover:border-lime-500 hover:shadow-[0_0_0_3px_rgba(132,204,22,0.15)] bg-black text-white"
    >
      {/* <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-300 flex items-center justify-center text-invert font-bold">
        {name?.slice(0, 1)}
      </div> */}
      <Dot width={30} height={30} className="flex-shrink-0 text-lime-500" />
      <div
        className={`overflow-hidden transition-[max-width,opacity] duration-300  relative right-3 ${opened ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
      >
        <div className="flex flex-col gap-0 ">
          <p className="text-sm font-semibold">{name}</p>
          {/* <p className="text-xs text-gray-500">{email}</p> */}
        </div>
      </div>
      <div className={`flex-shrink-0 transition-[transform] duration-300 mr-2 ${opened ? 'rotate-0' : 'rotate-180'}`}>
        {opened ? <ChevronDown  width={16} height={16}/> : <ChevronUp width={16} height={16} />   }
      </div>
    </Link>
  );
}
