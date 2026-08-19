'use client';

import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollToTop = () => {
  const pathname = usePathname();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  return scrollToTop;
};