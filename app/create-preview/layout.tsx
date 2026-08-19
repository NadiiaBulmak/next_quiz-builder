import { TopBar } from '@/components/shared/TopBar';
import { MobileTopBar } from '@/components/shared/MobileTopBar';
import { MobileMenu } from '@/components/shared/MobileMenu';
import { QuizCreateProvider } from '@/providers/QuizCreateProvider';

export default async function CreatePreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizCreateProvider>
      <div className="flex flex-col md:flex-row bg-stone-100">
        <main className="flex-1 flex flex-col min-h-screen transition-[padding-left] duration-300 ease-in-out lg:pl-[var(--sidebar-width)]">
          <MobileTopBar
            name="Preview User"
            email="example@example.com"
            previewMode={true}
            className="flex lg:hidden"
          />
          <TopBar
            name="Preview User"
            email="example@example.com"
            previewMode={true}
            className="hidden lg:flex"
          />
          {children}
        </main>
      </div>
    </QuizCreateProvider>
  );
}
