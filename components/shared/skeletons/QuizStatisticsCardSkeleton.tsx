import { Skeleton } from '@/components/shared/Skeleton';

export const QuizStatisticsCardSkeleton = () => {
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
};
