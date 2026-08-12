import AuthFormSection from '@/components/auth/UI/AuthFormSection';
import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';
import AuthRedirectLink from '@/components/auth/UI/AuthRedirect';

export default function ForgotPasswordSendPage() {
  return (
    <div className="flex w-full gap-3 px-4 md:px-8 flex-1 flex-col md:flex-row h-auto md:h-screen  max-w-[85rem] mx-auto">
      <AuthFormSection
        heading={CONTENT.auth.forgot_password_sent.header}
        subheading={CONTENT.auth.forgot_password_sent.subheader}
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-3 w-full p-6 rounded-lg bg-gray-100 border-0.5 border-gray-300">
            <p className="text-sm text-gray-500">
              {CONTENT.auth.form.forgot_password_notice}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 justify-center items-center mt-4 underline underline-offset-4">
            <AuthRedirectLink
              link={NAV_LINKS.login}
              text={CONTENT.auth.back_to_logIn.text}
              boldText={CONTENT.auth.back_to_logIn.boldtext}
            />
          </div>
        </div>
      </AuthFormSection>
    </div>
  );
}
