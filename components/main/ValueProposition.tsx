import { CONTENT } from '@/constants/content';
import { LANDING_VALUES } from '@/constants/landing';

export const ValueProposition = () => {
  return (
    <section className="px-6 scroll-mt-24" id="features">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl">
          {CONTENT.main.value_proposition.title_prefix}{' '}
          <span className="text-lime-500">
            {CONTENT.main.value_proposition.title_highlight}
          </span>{' '}
          {CONTENT.main.value_proposition.title_suffix}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {LANDING_VALUES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 border-b border-slate-200 pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-8 last:border-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-200 text-green-700">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-bold">{item.title}</h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
