import type { ReassuranceProps } from '@/types/props';

export const Reassurance = ({ children }: ReassuranceProps) => {
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-500">
      <span className="[&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-lime-500"></span>
      {children}
    </div>
  );
}
