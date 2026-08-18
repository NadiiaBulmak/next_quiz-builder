'use client';

export const FloatingLabel = ({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`absolute hidden items-center gap-2 rounded-xl border border-lime-100 bg-white px-4 py-3 text-xs font-semibold shadow-lg lg:flex ${className}`}
    >
      <span className="text-lime-500">{icon}</span>
      {children}
    </div>
  );
};
