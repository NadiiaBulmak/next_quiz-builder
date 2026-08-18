import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRedirectOnSuccess = (success: boolean, redirectUrl: string) => {
  if (!success || !redirectUrl) {
    return;
  }
    const router = useRouter();

  useEffect(() => {
    if (success) {
      router.push(redirectUrl);
    }
  }, [router, success, redirectUrl]);
};