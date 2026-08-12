export const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => {
  return (
    <div className="mb-10 text-center">
      <span className="rounded-full bg-lime-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-lime-600">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
