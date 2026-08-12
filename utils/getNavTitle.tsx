'use client';

import { TITLE_CONTENT } from '@/constants/title_content';
import { TitleContentType } from '@/types/props';
import { usePathname } from 'next/navigation';

export const useNavTitle = (): TitleContentType => {
  const pathname = usePathname();
  return (
    TITLE_CONTENT.find((link) => pathname.includes(link.href)) ?? {
      href: '',
      label: '',
      description: '',
    }
  );
};
