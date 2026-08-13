import { LucideIcon } from "lucide-react";

export function Metric({
  value,
  label,
  icon: Icon,
}: {
  value: number | string;
  label?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-1">
      {Icon && (
        <Icon width={16} height={16} className="text-stone-500" />
      )}
      <p className="text-xl font-semibold tracking-tight text-stone-900">
        {value}
      </p>
      {label && (
        <p className="mt-0.5 text-xs text-stone-500">{label}</p>
      )}
    </div>
  );
}
