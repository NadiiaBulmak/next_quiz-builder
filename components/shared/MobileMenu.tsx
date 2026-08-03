"use client";

import { BOTTOM_SIDEBAR_LINK, SIDEBAR_LINKS } from "@/constants/sidebar_links";
import MenuItem from "./MenuItem";

export default function MobileMenu() {
    return (
        <nav className="lg:hidden flex fixed bottom-0 left-0 right-0 bg-white p-4 justify-between items-center shadow-md border-1 border-gray-300">
            {SIDEBAR_LINKS.map((link) => (
                <MenuItem key={link.href} {...link} labelVisible={false} />
            ))}
            <MenuItem key={BOTTOM_SIDEBAR_LINK.href} {...BOTTOM_SIDEBAR_LINK} labelVisible={false} />
        </nav>
    );
}