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
        <div className="flex min-h-120 w-full overflow-hidden rounded-xl border border-gray-200">
          <iframe
            id="demo"
            className="h-full min-h-120 w-full border-0"
            src="/create-preview"
            title="Quiz Create"
          />
        </div>
      </div>

      {/* Floating labels */}

      <FloatingLabel className="-right-6 top-10" icon={<Settings2 size={14} />}>
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
        active ? 'bg-black font-semibold text-white' : 'text-slate-500'
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
        correct ? 'border-lime-400 bg-lime-50' : 'border-slate-200 bg-white'
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
