'use client';

import Link from "next/link";
import { useIsActiveLink } from "@/lib/useIsActiveLink";
import { SidebarLinkType } from "@/types/props";
import { useState } from "react";

export default function MenuItem({ label, href, description, icon: Icon, iconVisible, labelVisible }: SidebarLinkType) {
    const [active, setActive] = useState(false);
    const activeLink = useIsActiveLink(href);
    return (
        <Link
            href={href}
            prefetch={active}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`
                flex flex-col items-center gap-1 p-2 px-3 rounded-md
                border transition-all duration-300
                border-black
                text-sm
                hover:bg-lime-100 hover:border-gray-500
                lg:flex-row lg:gap-2 lg:items-center lg:text-base
                ${activeLink ? 'bg-lime-300 border-black' : 'border-transparent'}
                `}
        >
            {iconVisible && Icon ? <Icon width={24} height={24} /> : null}
            {labelVisible && label}
        </Link>
    );
}