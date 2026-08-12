'use client';

import { LogoType } from '@/types/props';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className="flex items-center cursor-pointer relative z-20 transition-all duration-300 overflow-visible relative transition-all duration-300 ease-in-out"
    >
        <Image
          src="/logo.webp"
          alt="Quiz Flow logo"
          width={150}
          height={52}
          className="h-auto w-auto max-h-14"
          priority
        />
        {/* // <Image
        //   src="/icon.webp"
        //   alt="Quiz Flow logo"
        //   width={72}
        //   height={72}
        //   className="h-auto w-auto max-h-14"
        //   priority
        // /> */}
    </div>
  );
}
