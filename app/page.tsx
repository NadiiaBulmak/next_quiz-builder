import { Footer } from '@/components/shared/Footer/Footer';
import { Navbar } from '@/components/main/Nav/Navbar';
import { Hero } from '@/components/main/Hero';
import { ValueProposition } from '@/components/main/ValueProposition';
import { TrustSection } from '@/components/main/TrustSection';
import { UseCases } from '@/components/main/UseCases';
import { AnalyticsShowcase } from '@/components/main/AnalyticsShowcase';
import { FinalCTA } from '@/components/main/FinalCTA';
import { HowItWorks } from '@/components/main/HowItWorks';
import { verifySession } from '@/services/sessions';

export default async function Home() {
    const session = await verifySession(true);
  const userId = session?.userId;
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar userId={userId} />

      <main className="flex flex-col items-center justify-center gap-20">
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <TrustSection />
        <UseCases />
        <AnalyticsShowcase />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
