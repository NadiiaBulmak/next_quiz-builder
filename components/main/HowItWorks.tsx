import { CONTENT } from '@/constants/content';
import { LANDING_STEPS, LANDING_STEP_ICONS } from '@/constants/steps';

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 px-6 py-12 w-full scroll-mt-24"
    >
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-lime-500">
            {CONTENT.main.how_it_works.landing.eyebrow}
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            {CONTENT.main.how_it_works.landing.title}
          </h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[17%] right-[17%] top-7 hidden border-t border-dashed border-lime-300 md:block" />

          {LANDING_STEPS.map((step, index) => {
            const Icon = LANDING_STEP_ICONS[index];

            return (
              <article key={step.number} className="relative z-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-lime-200 bg-white text-lime-500 shadow-md shadow-[0_0_0_2px_#c9f13c]">
                  <Icon size={23} />
                </div>

                <div className="mb-2 text-xs font-bold text-lime-500">
                  {step.number}
                </div>

                <h3 className="mb-2 text-base font-bold">{step.title}</h3>

                <p className="mx-auto max-w-[220px] text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
