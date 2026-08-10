'use client';

import { SIDEBAR_LINKS } from "@/constants/sidebar_links";
import { TITLE_CONTENT } from "@/constants/title_content";
import { SidebarLinkType, TitleContentType } from "@/types/props";
import { usePathname } from "next/navigation";

export const getNavTitle = (): SidebarLinkType => {
    const pathname = usePathname();
    return TITLE_CONTENT.find((link: TitleContentType[number]) => pathname.includes(link.href)) ?? ({} as SidebarLinkType);
}