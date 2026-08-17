'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
            <AlertTriangle className="h-7 w-7 text-stone-400" aria-hidden />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-stone-900">
              {CONTENT.common.error.title}
            </h2>
            <p className="max-w-sm text-sm text-stone-500">
              {CONTENT.common.error.description}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="mt-2 rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-lime-600"
          >
            {CONTENT.common.error.retry}
          </button>
        </div>
      </body>
    </html>
  );
}
