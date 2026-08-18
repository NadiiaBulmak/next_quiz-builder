import { Footer } from '@/components/shared/Footer/Footer';

export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col bg-stone-50">    
      <main className="flex-1 flex flex-col min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
