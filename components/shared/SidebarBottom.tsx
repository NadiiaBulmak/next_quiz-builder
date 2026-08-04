'use client';

import Link from "next/link";
import { BOTTOM_SIDEBAR_LINK } from "@/constants/sidebar_links";
import { SidebarBottomType } from "@/types/props";

export default function SidebarBottom({ name, email, opened = true }: SidebarBottomType) {
    return (
        <Link href={BOTTOM_SIDEBAR_LINK.href} className="flex w-full py-3 gap-3 cursor-pointer items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-300 flex items-center justify-center text-invert font-bold">
                {name?.slice(0, 1)}
            </div>
            <div className={`overflow-hidden transition-[max-width,opacity] duration-300 ${opened ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-gray-700">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                </div>
            </div>
        </Link> 
    );
}