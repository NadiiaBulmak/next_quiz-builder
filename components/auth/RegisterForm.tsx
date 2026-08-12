import { signup } from '@/app/actions/auth/signUp';
import { initialState } from '@/constants/initialFormState';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthRedirectLink from './UI/AuthRedirect';
import { NAV_LINKS } from '@/constants/nav_links';
import { CONTENT } from '@/constants/content';
import GoogleSubmitButton from './GoogleSubmitButton';
import AuthFormDivider from './UI/AuthFormDivider';

export default function SignUp() {
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.name.label}
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder={CONTENT.auth.form.name.placeholder}
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          {state?.errors?.name?.map((error) => (
            <p key={error}>{error}</p>
          ))}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700"
            >
              {CONTENT.auth.form.email.label}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="true"
              placeholder={CONTENT.auth.form.email.placeholder}
              className="text-xs block w-full rounded-md border-1 px-3 py-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-1 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
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
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={isPending}
            className="mt-8 hover:shadow-md w-full rounded-md border-1 border-gray-300 bg-lime-300 px-4 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
}
