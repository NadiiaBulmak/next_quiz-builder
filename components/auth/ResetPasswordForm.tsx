'use client';
import { useSearchParams } from 'next/navigation';
import { resetPasswordInitialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthRedirectLink from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import { resetPassword } from '@/app/actions/auth/resetPassword';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const [state, action, isPending] = useActionState(
    resetPassword,
    resetPasswordInitialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.quizzes.all);
    }
  }, [router, state?.success]);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <form action={action} className="flex w-full max-w-full flex-col gap-8">
        <input type="hidden" name="token" value={token ?? ''} />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.password.label}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder={CONTENT.auth.form.password.placeholder}
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
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
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              placeholder={CONTENT.auth.form.confirmPassword.placeholder}
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          {state?.errors?.token && (
            <div>
              <ul>
                {state.errors.token.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          {state?.errors?.password && (
            <div>
              <p>{CONTENT.auth.form.password_must}</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          {state?.errors?.confirmPassword && (
            <div>
              <ul>
                {state.errors.confirmPassword.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="hover:shadow-md w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
}
