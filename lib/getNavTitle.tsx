'use client';

import { SIDEBAR_LINKS } from "@/constants/sidebar_links";
import { SidebarLinkType } from "@/types/props";
import { usePathname } from "next/navigation";

export const getNavTitle = (): SidebarLinkType => {
    const pathname = usePathname();
    return SIDEBAR_LINKS.find((link: SidebarLinkType) => pathname === link.href) ?? ({} as SidebarLinkType);
}