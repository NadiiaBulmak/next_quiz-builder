import type { ReassuranceProps } from '@/types/props';

export const Reassurance = ({ children }: ReassuranceProps) => {
  return (
    <span className="flex items-center gap-1.5 text-xs text-slate-600 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-lime-700">
      {children}
    </span>
  );
};
