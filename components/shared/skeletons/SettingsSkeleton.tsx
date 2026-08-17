import { Skeleton } from '@/components/shared/Skeleton';

export function SettingsSkeleton() {
  return (
    <div className="max-h-screen flex-1 bg-zinc-50 px-3 py-4 mb-20 lg:mb-0 md:px-6 md:py-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-7 w-40" />
        </header>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="mt-2 h-3 w-56" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <Skeleton className="h-5 w-40" />
                <Skeleton className="mt-2 h-3 w-64" />
              </div>
              <Skeleton className="h-9 w-40 rounded-md" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
