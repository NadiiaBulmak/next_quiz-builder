import Image from 'next/image';
import { Footer } from '@/components/shared/Footer/Footer';
import { Navbar } from '@/components/main/Navbar';
import { Hero } from '@/components/main/Hero';
import { Features } from '@/components/main/Features';
import { HowItWorks } from '@/components/main/HowItWorks';
import { CTA } from '@/components/main/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
