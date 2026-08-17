import type { ResultStatProps } from '@/types/props';

export function ResultStat({ label, value }: ResultStatProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs font-medium text-gray-500">{label}</p>

      <p className="mt-1 text-md md:text-lg font-semibold text-gray-950">
        {value}
      </p>
    </div>
  );
}
