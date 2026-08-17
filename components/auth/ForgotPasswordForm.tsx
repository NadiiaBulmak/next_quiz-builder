'use client';

import { useActionState } from 'react';
import { forgotPasswordInitialState } from '@/constants/initialFormState';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthRedirectLink } from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { forgotPassword } from '@/app/actions/auth/forgotPassword';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { AuthFormField } from '@/constants/formFields';

export const ForgotPasswordForm = () => {
  const [state, action, isPending] = useActionState(
    forgotPassword,
    forgotPasswordInitialState,
  );

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.forgot_password_sent);
    }
  }, [router, state?.success]);

  return (
    <div className="flex w-full flex-col gap-2">
      <form action={action} className="flex w-full flex-col gap-8">
        <ActionToast state={state} />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor={AuthFormField.EMAIL}
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.email.label}
            </label>
            <input
              id={AuthFormField.EMAIL}
              name={AuthFormField.EMAIL}
              type="email"
              required
              aria-invalid={Boolean(state?.errors?.[AuthFormField.EMAIL])}
              aria-describedby="forgot-email-error"
              autoComplete="true"
              placeholder={CONTENT.auth.form.email.placeholder}
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          <FieldError
            id="forgot-email-error"
            errors={state?.errors?.[AuthFormField.EMAIL]}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="hover:shadow-md w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending
            ? CONTENT.common.submitting
            : CONTENT.auth.form.actions.send_reset_link}
        </button>
      </form>

      <div className="flex flex-col lg:flex-row gap-2 justify-center items-center mt-4">
        <AuthRedirectLink
          link={NAV_LINKS.login}
          text={CONTENT.auth.back_to_logIn.text}
          boldText={CONTENT.auth.back_to_logIn.boldtext}
        />
      </div>
    </div>
  );
};
