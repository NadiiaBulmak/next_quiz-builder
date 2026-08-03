import { NAV_LINKS } from "@/constants/nav_links";
import { deleteSession } from "@/lib/sessions"
import { redirect } from "next/navigation";

export async function logout() {
  await deleteSession()
  redirect(NAV_LINKS.login)
}