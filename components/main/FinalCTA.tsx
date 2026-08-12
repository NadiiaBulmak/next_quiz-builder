import { ArrowRight, Check } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';

export function FinalCTA() {
  return (
    <section className="px-6 pb-20 w-full scroll-mt-24">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl border border-lime-200 bg-lime-100 px-7 py-14 md:px-12">

        <div className="absolute right-0 top-0 h-full w-1/3 rotate-3 opacity-30 [background-image:radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative">
          <div className="flex flex-col items-start md:flex-row justify-between md:items-end gap-6 md:gap-12 w-full">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-lime-500">
                {CONTENT.main.final_cta.eyebrow}
              </p>

              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                {CONTENT.main.final_cta.title}
              </h2>

              <p className="mt-4 max-w-[500px] text-sm leading-6 text-slate-600">
                {CONTENT.main.final_cta.description}
              </p>
            </div>
            <div>
            <a
              href={ROUTES.REGISTER}
              className=" hover:animate-bounce group inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Create Your First Quiz
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <Reassurance>
                  <Check />
                  {CONTENT.main.final_cta.reassurance_free}
                </Reassurance>

                <Reassurance>
                  <Check />
                  {CONTENT.main.final_cta.reassurance_no_card}
                </Reassurance>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reassurance({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-slate-600 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-lime-700">
      {children}
    </span>
  );
}
