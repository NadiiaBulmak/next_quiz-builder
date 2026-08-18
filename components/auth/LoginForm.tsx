'use client';

import { loginInitialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { AuthRedirectLink } from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { AuthFormDivider } from './UI/AuthFormDivider';
import { login } from '@/app/actions/auth/login';
import { GoogleSubmitButton as GoogleShubmitButton } from './GoogleSubmitButton';
import {
  ActionToast,
  FieldError,
  QueryErrorToast,
} from '@/components/shared/FormFeedback';
import { AuthFormField } from '@/constants/formFields';
import { useRedirectOnSuccess } from '@/hooks/useRedirectOnSuccess';

export const LoginForm = () => {
  const [state, action, isPending] = useActionState(login, loginInitialState);
  useRedirectOnSuccess(state?.success ?? false, NAV_LINKS.quizzes.all);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <QueryErrorToast />
      <form
        action={action}
        className="flex w-full max-w-full flex-col gap-8 lg:gap-8"
      >
        <ActionToast state={state} />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
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
              aria-describedby="login-email-error"
              autoComplete="true"
              placeholder={CONTENT.auth.form.email.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="login-email-error"
            errors={state?.errors?.[AuthFormField.EMAIL]}
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor={AuthFormField.PASSWORD}
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.password.label}
            </label>
            <input
              id={AuthFormField.PASSWORD}
              name={AuthFormField.PASSWORD}
              type="password"
              required
              minLength={8}
              aria-invalid={Boolean(state?.errors?.[AuthFormField.PASSWORD])}
              aria-describedby="login-password-error"
              placeholder={CONTENT.auth.form.password.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="login-password-error"
            errors={state?.errors?.[AuthFormField.PASSWORD]}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="hover:shadow-md h-11 w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-3 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed lg:h-10 lg:py-2"
        >
          {isPending
            ? CONTENT.common.submitting
            : CONTENT.auth.form.actions.login}
        </button>
      </form>
      <div className="flex flex-col gap-3 lg:gap-2">
        <AuthFormDivider />
        <GoogleShubmitButton />
      </div>

      <div className="mt-4 flex flex-col items-center justify-between gap-3 lg:flex-row lg:gap-2">
        <AuthRedirectLink
          link={NAV_LINKS.sign_in}
          text={CONTENT.auth.to_signUp.text}
          boldText={CONTENT.auth.to_signUp.boldtext}
        />
        <AuthRedirectLink
          link={NAV_LINKS.forgot_password}
          text={CONTENT.auth.forgot_password.header}
        />
      </div>
    </div>
  );
};
