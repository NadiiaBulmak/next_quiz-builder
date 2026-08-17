import { CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { ResultPreview } from './ResultPreview';
import { Feature } from "./Feature";

export const ResultsShowcase = () => {
  const { results_showcase } = CONTENT.main;

  return (
    <section className="scroll-mt-24 px-6" id="results">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-black px-6 py-12 text-white md:px-12 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Content */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-lime-400">
              {results_showcase.eyebrow}
            </p>

            <h2 className="max-w-[480px] text-3xl font-black tracking-tight md:text-4xl">
              {results_showcase.title_line_one}
              <br />
              <span className="text-lime-400">
                {results_showcase.title_highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-[430px] text-sm leading-7 text-slate-400">
              {results_showcase.description}
            </p>

            <div className="mt-8 space-y-4">
              <Feature
                icon={<CheckCircle2 />}
                title={results_showcase.features[0].title}
                description={results_showcase.features[0].description}
              />

              <Feature
                icon={<Eye />}
                title={results_showcase.features[1].title}
                description={results_showcase.features[1].description}
              />

              <Feature
                icon={<Sparkles />}
                title={results_showcase.features[2].title}
                description={results_showcase.features[2].description}
              />
            </div>
          </div>

          {/* Result preview */}
          <ResultPreview id={results_showcase.id} />
        </div>
      </div>
    </section>
  );
};
