'use client';

import { LogoType } from '@/types/props';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';
import Image from 'next/image';
import { CONTENT } from '@/constants/content';

export default function SideBarLogo({ opened = true, setOpened }: LogoType) {
  const handleClick = () => {
    if (!setOpened) return;
    setOpened((prev) => !prev);
  };

  return (
    <div
      className="flex lg:min-h-18 items-center p-2 px-3 border-b border-gray-300 cursor-pointer relative z-20 hover:border-lime-500 transition-all duration-300 overflow-visible relative transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      {opened ? (
        <Image
          src="/logo.webp"
          alt={CONTENT.shared.logo_alt}
          width={150}
          height={52}
          className="h-auto w-auto max-h-14"
          priority
        />
      ) : (
        <Image
          src="/icon.webp"
          alt={CONTENT.shared.logo_alt}
          width={72}
          height={72}
          className="h-auto w-auto max-h-14"
          priority
        />
      )}

      <button className="cursor-pointer absolute text-lime-500 top-1/2 right-0 -translate-y-1/2 translate-x-full z-50 h-7 w-7 rounded-full border bg-white shadow flex items-center justify-center   hover:border-lime-500 hover:shadow-[0_0_0_3px_rgba(132,204,22,0.15)] transition-all duration-300">
        {opened ? <ChevronsLeft /> : <ChevronsRight />}
      </button>
    </div>
  );
}
