export const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-3 border-b border-white/10 pb-4 last:border-b-0">
      <span className="mt-0.5 shrink-0 text-lime-400 [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>

        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </div>
  );
};
