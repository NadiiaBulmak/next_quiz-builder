'use client'

import { AuthContentSection } from "@/components/auth/UI/AuthContentSection";
import { AuthFormSection } from "@/components/auth/UI/AuthFormSection";
import { CONTENT } from "@/constants/content";
import { SignUp as RegisterForm } from "@/components/auth/RegisterForm";

export default function SignUp() {
    return (
        <div className="flex w-full gap-3 px-4 md:px-8 flex-1 flex-col md:flex-row h-auto md:h-screen max-w-[85rem] mx-auto">
            <AuthFormSection heading={CONTENT.auth.sign_up.header} subheading={CONTENT.auth.sign_up.subheader} >
                <RegisterForm />
            </AuthFormSection>
            <AuthContentSection />
        </div>);
}
