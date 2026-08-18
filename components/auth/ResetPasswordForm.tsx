'use client';
import { useSearchParams } from 'next/navigation';
import { resetPasswordInitialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { AuthRedirectLink } from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { resetPassword } from '@/app/actions/auth/resetPassword';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { AuthFormField, PasswordResetFormField } from '@/constants/formFields';
import { useRedirectOnSuccess } from '@/hooks/useRedirectOnSuccess';

export const ResetPasswordForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get(PasswordResetFormField.TOKEN);

  const [state, action, isPending] = useActionState(
    resetPassword,
    resetPasswordInitialState,
  );
  useRedirectOnSuccess(state?.success ?? false, NAV_LINKS.quizzes.all);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <form action={action} className="flex w-full max-w-full flex-col gap-8">
        <ActionToast state={state} />
        <input
          type="hidden"
          name={PasswordResetFormField.TOKEN}
          value={token ?? ''}
        />
        <FieldError
          id="reset-token-error"
          errors={state?.errors?.[PasswordResetFormField.TOKEN]}
        />

        <div className="flex flex-col gap-3">
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
              aria-describedby="reset-password-error"
              placeholder={CONTENT.auth.form.password.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm-password"
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.confirmPassword.label}
            </label>
            <input
              id={PasswordResetFormField.CONFIRM_PASSWORD}
              name={PasswordResetFormField.CONFIRM_PASSWORD}
              type="password"
              required
              aria-invalid={Boolean(
                state?.errors?.[PasswordResetFormField.CONFIRM_PASSWORD],
              )}
              aria-describedby="reset-confirm-password-error"
              placeholder={CONTENT.auth.form.confirmPassword.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="reset-password-error"
            errors={state?.errors?.[AuthFormField.PASSWORD]}
          />
          <FieldError
            id="reset-confirm-password-error"
            errors={state?.errors?.[PasswordResetFormField.CONFIRM_PASSWORD]}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="hover:shadow-md h-11 w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-3 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed lg:h-10 lg:py-2"
        >
          {isPending
            ? CONTENT.common.submitting
            : CONTENT.auth.form.actions.change_password}
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
