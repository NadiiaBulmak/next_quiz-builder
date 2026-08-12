import { GraduationCap, Megaphone, Users, Sparkles } from 'lucide-react';
import { CONTENT } from '@/constants/content';

const useCases = [
  {
    title: CONTENT.main.use_cases.items[0].title,
    description: CONTENT.main.use_cases.items[0].description,
    icon: GraduationCap,
  },
  {
    title: CONTENT.main.use_cases.items[1].title,
    description: CONTENT.main.use_cases.items[1].description,
    icon: Sparkles,
  },
  {
    title: CONTENT.main.use_cases.items[2].title,
    description: CONTENT.main.use_cases.items[2].description,
    icon: Megaphone,
  },
  {
    title: CONTENT.main.use_cases.items[3].title,
    description: CONTENT.main.use_cases.items[3].description,
    icon: Users,
  },
];

export function UseCases() {
  return (
    <section id="examples" className="px-6 scroll-mt-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-lime-500">
            {CONTENT.main.use_cases.eyebrow}
          </p>

          <h2 className="max-w-[600px] text-3xl font-black tracking-tight md:text-4xl">
            {CONTENT.main.use_cases.title_line_one}
            <br />
            {CONTENT.main.use_cases.title_line_two}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg bg-lime-200 text-green-500 transition group-hover:bg-green-500 group-hover:text-white transition group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] ">
                  <Icon size={21} />
                </div>

                <h3 className="mb-2 font-bold">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
