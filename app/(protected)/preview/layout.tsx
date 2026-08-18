export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col md:flex-row bg-stone-100">
      <main className="flex-1 flex flex-col h-full">{children}</main>
    </div>
  );
}
