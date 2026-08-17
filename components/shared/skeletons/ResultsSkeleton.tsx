import { Skeleton } from '@/components/shared/Skeleton';

function StatCardSkeleton() {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <Skeleton className="h-4 w-24" />
      <div className="mt-2 flex items-center gap-3">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-8 w-14" />
      </div>
      <Skeleton className="mt-2 h-3 w-32" />
    </div>
  );
}

function QuizStatisticsCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>

        <div>
          <div className="my-5 h-px bg-stone-100" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr] w-full">
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResultsSkeleton() {
  return (
    <div className="min-h-screen flex-1 bg-zinc-50 px-3 py-4 md:px-6 md:py-6 mb-20 lg:mb-0">
      <div className="flex w-full flex-col gap-6">
        <div>
          <Skeleton className="h-7 w-48" />
          <Skeleton className="mt-2 h-4 w-72" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-6 w-40" />
              <Skeleton className="mt-2 h-4 w-56" />
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <QuizStatisticsCardSkeleton />
            <QuizStatisticsCardSkeleton />
          </div>
        </section>
      </div>
    </div>
  );
}
