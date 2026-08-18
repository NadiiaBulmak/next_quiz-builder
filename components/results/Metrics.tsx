import type { MetricProps } from '@/types/props';

export const Metric = ({ value, label, icon: Icon }: MetricProps) => {
  return (
    <div className="flex items-center gap-1 w-fit">
      {Icon && <Icon width={16} height={16} className="text-stone-500" />}
      <p className="text-xl font-semibold tracking-tight text-stone-900">
        {value}
      </p>
      {label && <p className="mt-0.5 text-xs text-stone-500">{label}</p>}
    </div>
  );
};
