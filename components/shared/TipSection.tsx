import { Lightbulb } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import type { TipSectionProps } from '@/types/props';

export const TipSection = ({ title, content }: TipSectionProps) => {
  return (
    <div className="w-full flex items-center gap-3 order-first bg-lime-100 p-6 rounded-md shadow-sm border border-lime-300 md:order-none">
      <Lightbulb className="w-6 h-6 text-lime-600" />
      <p className="text-sm">
        <span className="font-bold">{title ?? CONTENT.shared.tip_title}</span>{' '}
        {content}
      </p>
    </div>
  );
};
