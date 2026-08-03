import { verifySession } from "@/lib/sessions";
import { redirect } from "next/navigation";
import { getUserById } from "../../api/user/route";
import { NAV_LINKS } from "@/constants/nav_links";

export default async function Dashboard() {
    const session = await verifySession()
    const userId = session?.userId as string | undefined;
    
    if (!userId) {
        redirect(NAV_LINKS.login)
    }
    const user = await getUserById(userId);

    if (!user) {
        redirect(NAV_LINKS.login)
    }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {user && <p>Name: {user.name}</p>}
      </main>
    </div>
  );
}
