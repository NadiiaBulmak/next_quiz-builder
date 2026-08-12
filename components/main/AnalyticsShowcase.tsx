import { ArrowUpRight, BarChart3, CheckCircle2, Users } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export function AnalyticsShowcase() {
  return (
    <section className="px-6 scroll-mt-24" id="analytics">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-black px-6 py-12 text-white md:px-12 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-lime-400">
              {CONTENT.main.analytics_showcase.eyebrow}
            </p>

            <h2 className="max-w-[480px] text-3xl font-black tracking-tight md:text-4xl">
              {CONTENT.main.analytics_showcase.title_line_one}
              <br />
              <span className="text-lime-400">
                {CONTENT.main.analytics_showcase.title_highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-[430px] text-sm leading-7 text-slate-400">
              {CONTENT.main.analytics_showcase.description}
            </p>

            <div className="mt-8 space-y-4">
              <Insight
                icon={<Users />}
                title={CONTENT.main.analytics_showcase.insights[0].title}
                value={CONTENT.main.analytics_showcase.insights[0].value}
              />

              <Insight
                icon={<CheckCircle2 />}
                title={CONTENT.main.analytics_showcase.insights[1].title}
                value={CONTENT.main.analytics_showcase.insights[1].value}
              />

              <Insight
                icon={<BarChart3 />}
                title={CONTENT.main.analytics_showcase.insights[2].title}
                value={CONTENT.main.analytics_showcase.insights[2].value}
              />
            </div>
          </div>

          <AnalyticsPreview />
        </div>
      </div>
    </section>
  );
}

function Insight({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <span className="text-lime-400 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>

        {title}
      </div>

      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [45, 62, 50, 78, 68, 88, 72];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold">
            {CONTENT.main.analytics_showcase.preview.title}
          </p>

          <p className="mt-1 text-[10px] text-slate-500">
            {CONTENT.main.analytics_showcase.preview.subtitle}
          </p>
        </div>

        <ArrowUpRight size={17} className="text-lime-400" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard
          label={CONTENT.main.analytics_showcase.preview.stats[0].label}
          value={CONTENT.main.analytics_showcase.preview.stats[0].value}
        />

        <StatCard
          label={CONTENT.main.analytics_showcase.preview.stats[1].label}
          value={CONTENT.main.analytics_showcase.preview.stats[1].value}
        />

        <StatCard
          label={CONTENT.main.analytics_showcase.preview.stats[2].label}
          value={CONTENT.main.analytics_showcase.preview.stats[2].value}
        />
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-5">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-semibold">
            {CONTENT.main.analytics_showcase.preview.chart_title}
          </p>

          <span className="text-[10px] text-slate-500">
            {CONTENT.main.analytics_showcase.preview.chart_range}
          </span>
        </div>

        <div className="flex h-36 items-end gap-3">
          {bars.map((height, index) => (
            <div key={index} className="flex flex-1 flex-col justify-end">
              <div
                className="rounded-t bg-lime-400 transition hover:bg-lime-300"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[9px] text-slate-500">{label}</p>

      <p className="mt-1 text-lg font-bold">{value}</p>
    </div>
  );
}
