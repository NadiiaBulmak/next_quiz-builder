'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { CONTENT } from '@/constants/content';
import type { ActionToastProps, FieldErrorProps } from '@/types/props';

export const FieldError = ({ id, errors }: FieldErrorProps) => {
  if (!errors?.length) return null;

  return (
    <p id={id} role="alert" className="text-xs text-red-600">
      {errors.join(' ')}
    </p>
  );
};

export function ActionToast({ state }: ActionToastProps) {
  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message, { duration: 4000 });
    } else {
      toast.error(state.message, { duration: 5000 });
    }
  }, [state]);

  return null;
}

export function QueryErrorToast() {
  useEffect(() => {
    const error = new URLSearchParams(window.location.search).get('error');

    if (error) {
      toast.error(CONTENT.common.feedback.google_sign_in_failed, {
        duration: 5000,
      });
    }
  }, []);

  return null;
}
