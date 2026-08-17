import { CheckCircle2, Mail } from 'lucide-react';

import { AuthFormSection } from '@/components/auth/UI/AuthFormSection';
import { AuthRedirectLink } from '@/components/auth/UI/AuthRedirect';
import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';

export default function ForgotPasswordSendPage() {
  return (
    <div className="flex h-full w-full flex-col px-4 md:px-8 flex-1">
      <div className="mx-auto flex w-full max-w-[85rem] flex-1 items-center justify-center">
        <AuthFormSection
          heading={CONTENT.auth.forgot_password_sent.header}
          subheading={CONTENT.auth.forgot_password_sent.subheader}
        >
          <div className="flex w-full flex-col items-center">
            <div className="w-full rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-stone-600" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-stone-900">
                    Check your inbox
                  </p>

                  <p className="mt-1 text-sm leading-6 text-stone-500">
                    {CONTENT.auth.form.forgot_password_notice}
                  </p>
                </div>
              </div>
            </div>

            {/* Login link */}
            <div className="mt-7">
              <AuthRedirectLink
                link={NAV_LINKS.login}
                text={CONTENT.auth.back_to_logIn.text}
                boldText={CONTENT.auth.back_to_logIn.boldtext}
              />
            </div>
          </div>
        </AuthFormSection>
      </div>
    </div>
  );
}