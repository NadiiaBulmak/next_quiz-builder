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
import { CONTENT } from '@/constants/content';

export const QuizPreview = () => {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      {/* green background */}
      <div className="absolute inset-0 rounded-2xl bg-lime-50" />

      <div className="relative m-5 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="flex min-h-[360px]">
          {/* Sidebar */}
          <aside className="hidden w-[120px] shrink-0 border-r border-slate-100 bg-white p-3 sm:block">
            <div className="mb-7 flex items-center gap-1 text-[10px] font-black">
              <span className="h-3 w-2 rounded-r-full bg-black" />
              Quiz<span>{CONTENT.main.preview.logo_suffix}</span>
            </div>

            <div className="space-y-2 text-[9px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span>☷</span>
                {CONTENT.main.preview.sidebar.all_quizzes}
              </div>

              <div className="flex items-center gap-1.5">
                <span>☷</span>
                {CONTENT.main.preview.sidebar.my_quizzes}
              </div>

              <div className="flex items-center gap-1.5 rounded-md bg-black px-2 py-2 font-semibold text-white">
                <Plus size={9} />
                {CONTENT.main.preview.sidebar.create_quiz}
              </div>

              <div className="flex items-center gap-1.5">
                <BarChart3 size={10} />
                {CONTENT.main.preview.sidebar.results}
              </div>
            </div>
          </aside>

          {/* Quiz editor */}
          <div className="flex-1 bg-slate-50 p-3">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {CONTENT.main.preview.sidebar.create_quiz}
                </p>
                <p className="text-[8px] text-slate-400">
                  {CONTENT.main.preview.sidebar.create_quiz_description}
                </p>
              </div>

              <ChevronRight size={13} className="text-lime-500" />
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="mb-2 text-[10px] font-bold text-slate-800">
                {CONTENT.main.preview.question_label}
              </p>

              <p className="mb-1 text-[8px] text-slate-500">
                {CONTENT.main.preview.question_added}
              </p>

              <div className="rounded-md border border-lime-200 bg-white p-2">
                <p className="mb-1 text-[8px] font-semibold">
                  {CONTENT.main.preview.question_item}
                </p>

                <div className="mb-3 rounded border border-slate-200 px-2 py-2 text-[8px] text-slate-400">
                  {CONTENT.main.preview.mock_question_text}
                </div>

                <p className="mb-1 text-[8px] font-semibold">
                  {CONTENT.main.preview.answer_options}
                </p>

                <div className="mb-1 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full border border-lime-500" />
                  <div className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-[8px] text-slate-500">
                    {CONTENT.main.preview.option_one}
                  </div>
                  <span className="text-slate-400">×</span>
                  <span className="text-slate-400">⁙</span>
                </div>

                <div className="mb-2 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full border border-slate-300" />
                  <div className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-[8px] text-slate-500">
                    {CONTENT.main.preview.option_two}
                  </div>
                  <span className="text-slate-400">×</span>
                  <span className="text-slate-400">⁙</span>
                </div>

                <button className="flex w-full items-center justify-center rounded bg-lime-50 py-1.5 text-[8px] font-semibold text-lime-600">
                  <Plus size={9} />
                  {CONTENT.create.buttons.add_option}
                </button>
              </div>

              <button className="mt-2 flex w-full items-center justify-center rounded border border-lime-300 py-1.5 text-[8px] font-semibold text-slate-500">
                <Plus size={9} />
                {CONTENT.create.buttons.add_question}
              </button>

              <button className="mt-2 flex w-full items-center justify-center rounded bg-black py-1.5 text-[8px] font-semibold text-white">
                <ArrowRight size={9} />
                {CONTENT.create.buttons.save}
              </button>

              <button className="mt-1.5 flex w-full items-center justify-center rounded border border-slate-200 py-1.5 text-[8px] text-slate-500">
                {CONTENT.create.buttons.draft}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* annotation */}
      <div className="absolute -bottom-5 -left-10 hidden rotate-[-10deg] items-center gap-1 text-xs font-medium text-lime-600 lg:flex">
        <span>{CONTENT.main.preview.easy_to_create}</span>
        <ArrowRight size={30} className="rotate-[-30deg]" />
      </div>
    </div>
  );
};
