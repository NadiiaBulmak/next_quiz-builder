import type { TrustItemProps } from '@/types/props';

export const TrustItem = ({ icon, title }: TrustItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lime-500 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>

      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};
