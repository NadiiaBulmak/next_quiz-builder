import { CheckCircle2, Users, Link2 } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { TrustItem } from "./TrustItem";

export const TrustSection = () => {
  return (
    <section className="px-6 scroll-mt-24">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {CONTENT.main.trust_section.subtitle}
          </p>

          <h2 className="mt-2 max-w-[400px] text-2xl font-black tracking-tight">
            {CONTENT.main.trust_section.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <TrustItem
            icon={<CheckCircle2 />}
            title={CONTENT.main.trust_section.items[0]}
          />

          <TrustItem
            icon={<Link2 />}
            title={CONTENT.main.trust_section.items[1]}
          />

          <TrustItem
            icon={<Users />}
            title={CONTENT.main.trust_section.items[2]}
          />
        </div>
      </div>
    </section>
  );
};
