export const StatCard = ({
  label,
  value,
  description,
}: {
  label: string;
  value: number | string;
  description: string;
}) => (
  <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-stone-500">{label}</p>

    <div className="mt-2 flex items-end justify-between gap-3">
      <p className="text-3xl font-semibold tracking-tight text-stone-900">
        {value}
      </p>
    </div>

    <p className="mt-1 text-xs text-stone-400">{description}</p>
  </div>
);
