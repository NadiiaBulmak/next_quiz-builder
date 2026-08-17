import type { StatCardProps } from '@/types/props';

export const StatCard = ({
  label,
  value,
  description,
  icon: Icon,
}: StatCardProps) => (
  <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-stone-500">{label}</p>

    <div className="mt-2 flex items-center justify-start gap-3">
      <Icon className="h-6 w-6 text-stone-400" />
      <p className="text-3xl font-semibold tracking-tight text-stone-900">
        {value}
      </p>
    </div>

    <p className="mt-1 text-xs text-stone-400">{description}</p>
  </div>
);
