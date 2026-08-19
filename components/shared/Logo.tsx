'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants';
import { rejectIframeNavigation } from '@/utils/rejectIframeNavigation';

export const Logo = () => {

  return (
    <div className="flex items-center cursor-pointer relative z-20">
      <Link
        href={ROUTES.HOME}
        onClick={rejectIframeNavigation}
        className="flex items-center gap-2"
      >
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