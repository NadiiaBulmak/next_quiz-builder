'use client';

import { loginInitialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthRedirectLink from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import AuthFormDivider from './UI/AuthFormDivider';
import { login } from '@/app/actions/auth/login';
import GoogleShubmitButton from './GoogleSubmitButton';

export default function LoginForm() {
  const [state, action, isPending] = useActionState(login, loginInitialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.quizzes.all);
    }
  }, [router, state?.success]);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <form action={action} className="flex w-full max-w-full flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="true"
              placeholder="Enter your email"
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
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
          {isPending ? 'Submitting...' : 'Login'}
        </button>
      </form>
      <div className="flex flex-col gap-2">
        <AuthFormDivider />
        <GoogleShubmitButton />
      </div>

      <AuthRedirectLink
        link={NAV_LINKS.sign_in}
        text={CONTENT.auth.to_signUp.text}
        boldText={CONTENT.auth.to_signUp.boldtext}
      />
    </div>
  );
}
