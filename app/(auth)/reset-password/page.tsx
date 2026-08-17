import { AuthFormSection } from '@/components/auth/UI/AuthFormSection';
import { CONTENT } from '@/constants/content';
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.auth.resetPassword;

export default function ResetPasswordPage() {
  return (
    <div className="flex w-full gap-3 px-4 md:px-8 flex-1 flex-col md:flex-row h-auto md:h-screen  max-w-[85rem] mx-auto">
      <AuthFormSection
        heading={CONTENT.auth.reset_password.header}
        subheading={CONTENT.auth.reset_password.subheader}
      >
        <Suspense fallback={<div>{CONTENT.common.submitting}</div>}>
          <ResetPasswordForm />
        </Suspense>
      </AuthFormSection>
    </div>
  );
}
