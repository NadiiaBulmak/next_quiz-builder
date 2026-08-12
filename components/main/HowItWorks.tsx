import {
  FilePlus2,
  Link2,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create your quiz',
    description:
      'Add questions, answers and customize your quiz in seconds.',
    icon: FilePlus2,
  },
  {
    number: '02',
    title: 'Share it anywhere',
    description:
      'Publish your quiz and send one simple link to your audience.',
    icon: Link2,
  },
  {
    number: '03',
    title: 'See the results',
    description:
      'Track responses, scores and performance from one dashboard.',
    icon: BarChart3,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 px-6 py-12 w-full scroll-mt-24"
    >
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-lime-500">
            How it works
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            From blank page to published quiz in minutes.
          </h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[17%] right-[17%] top-7 hidden border-t border-dashed border-lime-300 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative z-10 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-lime-200 bg-white text-lime-500 shadow-md shadow-[0_0_0_2px_#c9f13c]">
                  <Icon size={23} />
                </div>

                <div className="mb-2 text-xs font-bold text-lime-500">
                  {step.number}
                </div>

                <h3 className="mb-2 text-base font-bold">
                  {step.title}
                </h3>

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