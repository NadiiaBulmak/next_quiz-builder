'use client';

import Link from "next/link";
import { useIsActiveLink } from "@/hooks/useIsActiveLink";
import { SidebarLinkType } from "@/types/props";
import { useState } from "react";

export default function MenuItem({ label, href, description, icon: Icon, iconVisible, labelVisible, opened }: SidebarLinkType & { opened: boolean }) {
    const [active, setActive] = useState(false);
    const activeLink = useIsActiveLink(href);
    return (
        <Link
            href={href}
            prefetch={active}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`
                flex items-center p-2 px-3 rounded-md
                border text-sm
                hover:bg-lime-100 hover:border-gray-500
                lg:text-base
                ${opened ? 'justify-start gap-2' : 'justify-center gap-0'}
                ${activeLink ? 'bg-lime-300 border-black' : 'border-transparent'}
                transition-all duration-300
                `}
        >
            <span className="flex-shrink-0 flex items-center justify-center">
                {iconVisible && Icon ? <Icon width={24} height={24} /> : null}
            </span>
            <span className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-300 ${opened ? 'max-w-[12rem] opacity-100 ml-1' : 'max-w-0 opacity-0 ml-0'}`}>
                {labelVisible ? label : null}
            </span>
        </Link>
    );
}