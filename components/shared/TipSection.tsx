import { Lightbulb } from 'lucide-react';

export const TipSection = ({
  title,
  content,
}: {
  title?: string;
  content: string;
}) => {
  return (
    <div className="w-full flex items-center gap-3 order-first bg-lime-100 p-6 rounded-md shadow-sm border border-lime-300 md:order-none">
      <Lightbulb className="w-6 h-6 text-lime-600" />
      <p className="text-sm">
        <span className="font-bold">{title ?? 'Tips:'}</span> {content}
      </p>
    </div>
  );
};
