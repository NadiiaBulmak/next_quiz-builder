import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CONTENT } from '@/constants/content';
import { Toaster } from 'sonner';
import { ScrollToTopOnRouteChange } from '@/components/shared/ScrollToTopOnRouteChange';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: CONTENT.metadata.root.title,
  description: CONTENT.metadata.root.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnRouteChange />
        {children}
        <Toaster position="top-right" closeButton richColors />
      </body>
    </html>
  );
}
