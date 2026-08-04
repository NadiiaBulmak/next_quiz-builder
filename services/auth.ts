import { verifySession } from "./sessions";
import { NAV_LINKS } from "@/constants/nav_links";
import { getUserById } from "@/services/user.service";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getCurrentUser = cache(async () => {
    const session = await verifySession();
    const userId = session?.userId;

    if (!userId) {
        redirect(NAV_LINKS.login)
    }

    const user = await getUserById(userId);

    if (!user) {
        redirect(NAV_LINKS.login)
    }

    return user;
});