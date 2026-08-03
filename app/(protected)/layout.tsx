import { getCurrentUser } from "@/lib/auth";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    return (
        <>
        {/* <Sidebar user={user} /> */}
            {children}
        </>
    );
}