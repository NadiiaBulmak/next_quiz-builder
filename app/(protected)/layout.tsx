import { getCurrentUser } from "@/lib/auth";
import Sidebar from "@/components/shared/SideBar";
import TopBar from "@/components/shared/TopBar";
import MobileTopBar from "@/components/shared/MobileTopBar";
import MobileMenu from "@/components/shared/MobileMenu";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    return (
        <div className="flex flex-col md:flex-row bg-stone-100">
            <Sidebar {...user} />
            <main className="flex-1 flex flex-col">
                <MobileTopBar />
                <TopBar />
            {/* <main className="flex-1 p-4"> */}
                {children}
                <MobileMenu />
            </main>
        </div>
    );
}