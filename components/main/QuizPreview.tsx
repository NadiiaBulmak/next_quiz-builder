import {
  BarChart3,
  Check,
  ChevronDown,
  Plus,
  Settings2,
  Share2,
} from 'lucide-react';

export function QuizPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]" id="demo">
      {/* Background shape */}

      <div className="absolute -inset-6 rounded-[32px] bg-lime-100/60 blur-2xl" />

      <div className="relative rotate-[1deg] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
        <div className="flex min-h-[430px]">
          {/* Sidebar */}

          {/* <aside className="hidden w-[150px] shrink-0 border-r border-slate-200 bg-white p-4 sm:block">
            <div className="mb-8 flex items-center gap-1 text-sm font-black">
              <span className="h-5 w-3 rounded-r-full bg-black" />
              Quiz
              <span>Flow</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <SidebarItem active icon="☷">
                All Quizzes
              </SidebarItem>

              <SidebarItem icon="☷">
                My Quizzes
              </SidebarItem>

              <SidebarItem icon="+">
                Create Quiz
              </SidebarItem>

              <SidebarItem icon="▥">
                Results
              </SidebarItem>
            </div>
          </aside> */}

          {/* Editor */}

          {/* <div className="flex-1 bg-slate-50 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">
                  Create Quiz
                </p>

                <p className="text-[10px] text-slate-400">
                  Build your quiz step by step
                </p>
              </div>

              <div className="rounded-md bg-black px-3 py-1.5 text-[9px] font-semibold text-white">
                Publish Quiz
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold">
                  Question 1
                </p>

                <div className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[9px] text-slate-500">
                  Multiple Choice
                  <ChevronDown size={10} />
                </div>
              </div>

              <div className="mb-5 rounded-lg border border-slate-200 px-3 py-3 text-xs text-slate-400">
                What is the result of typeof null?
              </div>

              <p className="mb-2 text-[10px] font-semibold">
                Answer options
              </p>

              <Answer text="null" />

              <Answer
                text="object"
                correct
              />

              <Answer text="undefined" />

              <Answer text="boolean" />

              <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-md border border-dashed border-lime-300 bg-lime-50 py-2 text-[10px] font-semibold text-lime-700">
                <Plus size={12} />
                Add Option
              </button>
            </div>

            <div className="mt-4 flex justify-between gap-3">
              <button className="flex flex-1 items-center justify-center gap-1 rounded-md border border-slate-200 bg-white py-2 text-[10px] font-semibold">
                <Plus size={12} />
                Add Question
              </button>

              <button className="flex items-center gap-1 rounded-md bg-black px-5 py-2 text-[10px] font-semibold text-white">
                Save Draft
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating labels */}

      <FloatingLabel
        className="-right-6 top-10"
        icon={<Settings2 size={14} />}
      >
        Create in minutes
      </FloatingLabel>

      <FloatingLabel
        className="-right-10 bottom-24"
        icon={<Share2 size={14} />}
      >
        Share instantly
      </FloatingLabel>

      <FloatingLabel
        className="-bottom-5 left-8"
        icon={<BarChart3 size={14} />}
      >
        See results
      </FloatingLabel>
    </div>
  );
}

function SidebarItem({
  children,
  icon,
  active = false,
}: {
  children: React.ReactNode;
  icon: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md px-2 py-2 ${
        active
          ? 'bg-black font-semibold text-white'
          : 'text-slate-500'
      }`}
    >
      <span>{icon}</span>
      {children}
    </div>
  );
}

function Answer({
  text,
  correct = false,
}: {
  text: string;
  correct?: boolean;
}) {
  return (
    <div
      className={`mb-2 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${
        correct
          ? 'border-lime-400 bg-lime-50'
          : 'border-slate-200 bg-white'
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
          correct
            ? 'border-lime-500 bg-lime-500 text-white'
            : 'border-slate-300'
        }`}
      >
        {correct && <Check size={9} />}
      </span>

      {text}
    </div>
  );
}

function FloatingLabel({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute hidden items-center gap-2 rounded-xl border border-lime-100 bg-white px-4 py-3 text-xs font-semibold shadow-lg lg:flex ${className}`}
    >
      <span className="text-lime-500">{icon}</span>
      {children}
    </div>
  );
}