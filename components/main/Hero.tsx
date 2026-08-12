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
} from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { QuizPreview } from './QuizPreview';
import { CONTENT } from '@/constants/content';

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1.5 text-xs font-medium text-lime-700">
            <Sparkles size={12} />
            {CONTENT.main.hero.badge}
          </div>

          <h1 className="max-w-[560px] text-5xl font-black leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-6xl">
            {CONTENT.main.hero.title_prefix}{' '}
            <span className="relative inline-block text-lime-500">
              {CONTENT.main.hero.title_highlight}
              <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-2 rounded-full bg-lime-500" />
            </span>{' '}
            {CONTENT.main.hero.title_suffix}
          </h1>

          <p className="mt-7 max-w-[520px] text-base leading-7 text-slate-600">
            {CONTENT.main.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ROUTES.REGISTER}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_2px_#b8ec20] transition hover:bg-slate-900"
            >
              <Plus size={17} />
              {CONTENT.main.hero.create_first_quiz}
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-slate-300"
            >
              <Play size={14} className="fill-lime-500 text-lime-500" />
              {CONTENT.main.hero.try_demo_quiz}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-lime-500" />
              {CONTENT.main.hero.no_signup_required}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Check size={15} className="text-lime-500" />
              {CONTENT.main.hero.works_on_any_device}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Heart size={15} className="text-lime-500" />
              {CONTENT.main.hero.free_to_start}
            </div>
          </div>
        </div>

        <QuizPreview />
      </div>
    </section>
  );
}
