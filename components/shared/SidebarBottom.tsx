'use client';

import Link from "next/link";
import { BOTTOM_SIDEBAR_LINK } from "@/constants/sidebar_links";

export default function SidebarBottom({ name, email }: { name: string | null; email: string }) {
    return (
        <Link href={BOTTOM_SIDEBAR_LINK.href} className="flex w-full py-3 gap-3 cursor-pointer">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-300 flex items-center justify-center text-invert font-bold">
                {name?.slice(0, 1)}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
       </Link> 
    );
}