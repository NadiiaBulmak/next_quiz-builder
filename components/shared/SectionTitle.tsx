export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}