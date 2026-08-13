export const AnalyticsHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
        {title}
      </h1>

      <p className="mt-1 text-sm text-stone-500">
        {description}
      </p>
    </div>
  );
};
