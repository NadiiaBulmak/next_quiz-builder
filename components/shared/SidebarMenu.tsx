'use client';

import { SIDEBAR_LINKS } from "@/constants/sidebar_links";
import MenuItem from "./MenuItem";
import { SidebarMenuType } from "@/types/props";

export default function SidebarMenu({ opened }: SidebarMenuType) {
    return (<nav className="flex flex-col gap-2 w-full">
        {SIDEBAR_LINKS.map((link) => (
            <MenuItem key={link.href} {...link} labelVisible={true} opened={opened!} />
        ))}
    </nav>)
}