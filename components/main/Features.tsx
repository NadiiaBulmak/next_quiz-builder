import { features } from '@/constants/features';
import { SectionHeading } from './SectionHeading';
import { CONTENT } from '@/constants/content';

export const Features = () => {
  return (
    <section id="features" className="px-6 py-10">
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading
          eyebrow={CONTENT.main.features.eyebrow}
          title={CONTENT.main.features.title}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 text-lime-600">
                  <Icon size={20} />
                </div>

                <h3 className="mb-2 text-sm font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-xs leading-5 text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
