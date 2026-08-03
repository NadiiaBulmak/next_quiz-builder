import Logo from "@/components/shared/Logo";

export default function AuthHeader() {
    return (
        <div className="flex w-full px-6 md:px-8 md:px-8 py-6 bg-bg-primary font-sans dark:bg-black max-w-[85rem] mx-auto">
            <Logo />
        </div>
    );
}