'use client';

import { useActionState } from 'react';
import {
  requestPasswordReset,
  updateUserName,
} from '@/app/actions/auth/userSettings';
import { ActionToast, FieldError } from '@/components/shared/FormFeedback';
import { CONTENT } from '@/constants/content';
import type { UserSettingsFormProps } from '@/types/props';
import { defaultNameState, defaultResetState } from '@/constants/defaultStates';
import { AuthFormField } from '@/constants/formFields';

export const UserSettingsForm = ({ user }: UserSettingsFormProps) => {
  const [nameState, nameAction, isNamePending] = useActionState(
    updateUserName,
    defaultNameState,
  );
  const [resetState, resetAction, isResetPending] = useActionState(
    requestPasswordReset,
    defaultResetState,
  );

  return (
    <div className="max-h-screen flex-1 bg-zinc-50 px-4 py-5 mb-20 md:px-6 md:py-6 lg:mb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {CONTENT.settings.account}
          </p>
          <h1 className="text-2xl font-semibold text-zinc-900">
            {CONTENT.settings.title}
          </h1>
        </header>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
            <form action={nameAction} className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-medium text-zinc-900">
                  {CONTENT.settings.profile}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {CONTENT.settings.profile_description}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor={AuthFormField.NAME}
                  className="text-sm font-medium text-zinc-700"
                >
                  {CONTENT.settings.name}
                </label>
                <input
                  id={AuthFormField.NAME}
                  name={AuthFormField.NAME}
                  defaultValue={user.name ?? ''}
                  minLength={2}
                  aria-invalid={Boolean(
                    nameState?.errors?.[AuthFormField.NAME],
                  )}
                  aria-describedby="settings-name-error"
                  placeholder={CONTENT.settings.name_placeholder}
                  className="h-11 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 lg:h-10 lg:px-3 lg:py-2.5"
                />
              </div>

              <FieldError
                id="settings-name-error"
                errors={nameState?.errors?.[AuthFormField.NAME]}
              />
              <ActionToast state={nameState} />

              <button
                type="submit"
                disabled={isNamePending}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-lime-300 px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit lg:h-10 lg:py-2.5"
              >
                {isNamePending
                  ? CONTENT.settings.saving
                  : CONTENT.settings.save_changes}
              </button>
            </form>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-medium text-zinc-900">
                  {CONTENT.settings.security}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {CONTENT.settings.security_description}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-700">
                <span className="font-medium text-zinc-900">
                  {CONTENT.settings.email}
                </span>{' '}
                {user.email}
              </div>

              <form action={resetAction} className="flex flex-col gap-3">
                <ActionToast state={resetState} />
                <button
                  type="submit"
                  disabled={isResetPending}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit lg:h-10 lg:py-2.5"
                >
                  {isResetPending
                    ? CONTENT.settings.sending_reset_email
                    : CONTENT.settings.send_reset_link}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
