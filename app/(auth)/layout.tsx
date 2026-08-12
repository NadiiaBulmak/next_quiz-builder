import AuthHeader from '@/components/auth/UI/AuthHeader';
import RightsReserved from '@/components/shared/RightsReserved';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CONTENT } from '@/constants/content';

export const metadata: Metadata = {
  title: CONTENT.metadata.auth.title,
  description: CONTENT.metadata.auth.description,
};

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
