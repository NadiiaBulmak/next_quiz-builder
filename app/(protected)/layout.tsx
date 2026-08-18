import { getCurrentUser } from '@/services/auth';
import { SideBar as Sidebar } from '@/components/shared/SideBar';
import { TopBar } from '@/components/shared/TopBar';
import { MobileTopBar } from '@/components/shared/MobileTopBar';
import { MobileMenu } from '@/components/shared/MobileMenu';
import { QuizCreateProvider } from '@/providers/QuizCreateProvider';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col md:flex-row bg-stone-100">
      <Sidebar {...user} />
      <main className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-[var(--sidebar-width)] transition-[padding-left] duration-300 ease-in-out">
        <MobileTopBar {...user} className="flex lg:hidden" />
        <TopBar {...user} className="hidden lg:flex" />
        <QuizCreateProvider>{children}</QuizCreateProvider>
        <MobileMenu />
      </main>
    </div>
  );
}
