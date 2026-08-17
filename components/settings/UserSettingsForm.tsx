'use client';

import { useActionState } from 'react';
import {
  requestPasswordReset,
  updateUserName,
} from '@/app/actions/auth/userSettings';
import { User } from '@/types/user';

const defaultNameState = {
  success: false,
  errors: undefined,
  message: undefined,
};

const defaultResetState = {
  success: false,
  errors: undefined,
  message: undefined,
};

export default function UserSettingsForm({ user }: { user: User }) {
  const [nameState, nameAction, isNamePending] = useActionState(
    updateUserName,
    defaultNameState,
  );
  const [resetState, resetAction, isResetPending] = useActionState(
    requestPasswordReset,
    defaultResetState,
  );

  return (
    <div className="max-h-screen flex-1 bg-zinc-50 px-3 py-4 mb-20 lg:mb-0 md:px-6 md:py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Account
          </p>
          <h1 className="text-2xl font-semibold text-zinc-900">
            User settings
          </h1>
        </header>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <form action={nameAction} className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-medium text-zinc-900">Profile</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Update the public name shown across your account.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  defaultValue={user.name ?? ''}
                  placeholder="Enter your name"
                  className="rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200"
                />
              </div>

              {nameState?.errors?.name?.[0] && (
                <p className="text-sm text-red-600">
                  {nameState.errors.name[0]}
                </p>
              )}

              {nameState?.message && (
                <p
                  className={`text-sm ${
                    nameState.success ? 'text-emerald-600' : 'text-red-600'
                  }`}
                >
                  {nameState.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isNamePending}
                className="inline-flex w-fit items-center justify-center rounded-xl bg-lime-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isNamePending ? 'Saving...' : 'Save changes'}
              </button>
            </form>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-medium text-zinc-900">Security</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Your password can be reset by email instantly.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-700">
                <span className="font-medium text-zinc-900">Email:</span>{' '}
                {user.email}
              </div>

              <form action={resetAction} className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isResetPending}
                  className="inline-flex w-fit items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isResetPending
                    ? 'Sending reset email...'
                    : 'Send reset link'}
                </button>

                {resetState?.message && (
                  <p
                    className={`text-sm ${
                      resetState.success ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {resetState.message}
                  </p>
                )}
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
