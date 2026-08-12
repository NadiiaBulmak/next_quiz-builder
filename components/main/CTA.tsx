import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Edit3,
  Heart,
  Lightbulb,
  Play,
  Plus,
  Share2,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const CTA = () => {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 rounded-xl border border-lime-200 bg-lime-50/70 p-6 md:flex-row md:px-8">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-lime-500 text-white shadow-sm">
            <Trophy size={25} />
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900">
              Ready to create your first quiz?
            </h3>

            <p className="mt-1 text-xs text-slate-600">
              Join thousands of creators who are already using QuizFlow.
            </p>
          </div>
        </div>

        <a
          href="/register"
          className="inline-flex shrink-0 items-center gap-4 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
        >
          Get Started Free
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}