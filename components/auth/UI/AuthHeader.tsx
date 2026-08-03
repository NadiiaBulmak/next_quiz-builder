import Image from "next/image";

export default function AuthHeader() {
    return (
        <div className="flex w-full px-6 lg:px-8 md:px-8 py-6 bg-bg-primary font-sans dark:bg-black max-w-[85rem] mx-auto">
            <Image
                className="dark:invert"
                src="/logo.webp"
                alt="Quiz Flow logo"
                width={80}
                height={25}
                priority
            />
        </div>
    );
}