import Image from "next/image";

export default function GoogleSubmitButton() {
    const googleAuthUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL || "http://localhost:3001/auth/google";

    return (
        <button
            type="button"
            onClick={() => window.location.assign(googleAuthUrl)}
            className="flex items-center justify-center gap-3 w-full rounded-md border-1 border-gray-300 px-4 py-2 text-xs font-medium text-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <Image
                src="/images/google_icon.webp"
                alt="Google"
                width={16}
                height={16}
            />
            Continue with Google
        </button>
    );
}