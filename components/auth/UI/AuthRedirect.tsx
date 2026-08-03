"use client";

import { AuthRedirectLinkType } from "@/types/props";
import Link from "next/link";

export default function AuthRedirectLink({ link, text, boldText }: AuthRedirectLinkType) {
    return (
        <Link href={link} className="flex justify-center gap-2 text-xs text-gray-500 font-regular w-full">
            <span className="w-fit-content">{text}</span>
            <span className="text-black font-medium">{boldText}</span>
        </Link>
    );
}