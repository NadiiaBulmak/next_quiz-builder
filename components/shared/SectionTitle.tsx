import type { SectionTitleProps } from '@/types/props';

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
};
