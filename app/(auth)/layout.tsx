import { AuthHeader } from '@/components/auth/UI/AuthHeader';
import { RightsReserved } from '@/components/shared/RightsReserved';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen mx-auto flex-col items-center bg-zinc-50 dark:bg-black md:items-start w-full">
      <AuthHeader />
      {children}
      <RightsReserved />
    </main>
  );
}
