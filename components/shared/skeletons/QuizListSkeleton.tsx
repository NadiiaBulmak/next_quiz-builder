import { Skeleton } from '@/components/shared/Skeleton';

function QuizCardSkeleton() {
  return (
    <div
      className="flex flex-col gap-4 bg-white shadow-md w-full rounded-md p-4 justify-between"
      aria-busy="true"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Skeleton className="h-9 w-full rounded-md" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  );
}

export function QuizListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black bg-white px-3 md:px-6 py-3 md:py-6 lg:py-0 gap-4 mb-20 lg:mb-0">
      <div className="sticky top-20 z-30 flex w-full flex-col gap-3 bg-zinc-50 p-3 md:flex-row">
        <Skeleton className="h-10 flex-1 rounded-sm" />
        <div className="flex gap-2 h-10">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: count }).map((_, index) => (
          <QuizCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
