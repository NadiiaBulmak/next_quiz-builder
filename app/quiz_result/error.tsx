'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { StatusMessage } from '@/components/shared/StatusMessage';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';

export default function QuizResultError({
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
    <StatusMessage
      icon={AlertTriangle}
      title={CONTENT.common.error.title}
      description={CONTENT.common.error.description}
      actions={[
        { type: 'button', onClick: reset, label: CONTENT.common.error.retry },
        {
          type: 'link',
          href: ROUTES.HOME,
          label: CONTENT.common.error.back_home,
        },
      ]}
    />
  );
}
