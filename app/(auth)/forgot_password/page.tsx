import AuthFormSection from "@/components/auth/UI/AuthFormSection";
import { CONTENT } from "@/constants/content";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <div className="flex w-full gap-3 px-4 md:px-8 flex-1 flex-col md:flex-row h-auto md:h-screen  max-w-[85rem] mx-auto">
        <AuthFormSection  heading={CONTENT.auth.forgot_password.header} subheading={CONTENT.auth.forgot_password.subheader}>
            <ForgotPasswordForm />
        </AuthFormSection>
        </div>);
}
