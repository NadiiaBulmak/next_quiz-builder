'use client';

import { LogoType } from '@/types/props';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';
import Image from 'next/image';
import { CONTENT } from '@/constants/content';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer relative z-20 transition-all duration-300 overflow-visible relative transition-all duration-300 ease-in-out">
      <Link href={ROUTES.HOME} className="flex items-center gap-2 transition-all duration-300">
      <Image
        src="/logo.webp"
        alt={CONTENT.shared.logo_alt}
        width={150}
        height={52}
        className="h-auto w-auto max-h-10"
        priority
      />
      </Link>
    </div>
  );
};
