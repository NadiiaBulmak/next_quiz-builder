'use client';
import { signup } from '@/app/actions/auth/signUp';
import { initialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthRedirectLink } from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { GoogleSubmitButton } from './GoogleSubmitButton';
import { AuthFormDivider } from './UI/AuthFormDivider';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { AuthFormField } from '@/constants/formFields';

export const SignUp = () => {
  const [state, action, isPending] = useActionState(signup, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.quizzes.all);
    }
  }, [router, state?.success]);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <form action={action}>
        <ActionToast state={state} />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor={AuthFormField.NAME}
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.name.label}
            </label>
            <input
              id={AuthFormField.NAME}
              name={AuthFormField.NAME}
              required
              minLength={2}
              aria-invalid={Boolean(state?.errors?.[AuthFormField.NAME])}
              aria-describedby="signup-name-error"
              autoComplete="name"
              placeholder={CONTENT.auth.form.name.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="signup-name-error"
            errors={state?.errors?.[AuthFormField.NAME]}
          />
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
              aria-describedby="signup-email-error"
              autoComplete="true"
              placeholder={CONTENT.auth.form.email.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="signup-email-error"
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
              aria-describedby="signup-password-error"
              placeholder={CONTENT.auth.form.password.placeholder}
              className="text-xs block h-11 w-full rounded-md border-1 px-4 py-3 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500 lg:h-10 lg:px-3 lg:py-2"
            />
          </div>
          <FieldError
            id="signup-password-error"
            errors={state?.errors?.[AuthFormField.PASSWORD]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={isPending}
            className="mt-8 h-11 hover:shadow-md w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-3 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed lg:h-10 lg:py-2"
          >
            {isPending
              ? CONTENT.common.submitting
              : CONTENT.auth.form.actions.sign_up}
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-2">
        <AuthFormDivider />
        <GoogleSubmitButton />
      </div>

      <AuthRedirectLink
        link={NAV_LINKS.login}
        text={CONTENT.auth.to_logIn.text}
        boldText={CONTENT.auth.to_logIn.boldtext}
      />
    </div>
  );
};
