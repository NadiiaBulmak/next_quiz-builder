import AuthFormSection from "@/components/auth/UI/AuthFormSection";
import LoginForm from "@/components/auth/LoginForm";
import { CONTENT } from "@/constants/content";
import AuthContentSection from "@/components/auth/UI/AuthContentSection";

export default function Home() {
    return (
        <div className="flex w-full gap-3 px-4 md:px-8 flex-1 flex-col md:flex-row h-auto md:h-screen  max-w-[85rem] mx-auto">
        <AuthContentSection />
        <AuthFormSection  heading={CONTENT.auth.login.header} subheading={CONTENT.auth.login.subheader}>
            <LoginForm />
        </AuthFormSection>
        </div>);
}
