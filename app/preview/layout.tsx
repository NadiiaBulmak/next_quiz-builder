import { getCurrentUser } from '@/services/auth';
import Sidebar from '@/components/shared/SideBar';
import PreviewTopBar from '@/components/preview/PreviewTopBar';
import MobileTopBar from '@/components/shared/MobileTopBar';
import MobileMenu from '@/components/shared/MobileMenu';

export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getCurrentUser();

  return (
    <div className="flex flex-col md:flex-row bg-stone-100">
      <main className="flex-1 flex flex-col min-h-screen">{children}</main>
    </div>
  );
}
