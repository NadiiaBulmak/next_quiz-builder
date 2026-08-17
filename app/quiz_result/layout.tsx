import { getCurrentUser } from '@/services/auth';
import { SideBar as Sidebar } from '@/components/shared/SideBar';
import { PreviewTopBar } from '@/components/preview/PreviewTopBar';
import { MobileTopBar } from '@/components/shared/MobileTopBar';
import { MobileMenu } from '@/components/shared/MobileMenu';
import { Footer } from '@/components/shared/Footer/Footer';
import { SharedQuizTopContent } from '@/components/shared-quiz/SharedQuizTopContent';

export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getCurrentUser();

  return (
    <div className="flex flex-col bg-stone-50">    
      <main className="flex-1 flex flex-col min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
