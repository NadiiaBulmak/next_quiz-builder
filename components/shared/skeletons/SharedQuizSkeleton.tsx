import { Skeleton } from '@/components/shared/Skeleton';

const SharedQuizTopContentSkeleton = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-4 w-full px-6 md:px-8 lg:px-20 py-6 pb-0">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-9 w-32 rounded-lg" />
      </div>
    </div>
  );
};

export function SharedQuizSkeleton() {
  return (
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      <SharedQuizTopContentSkeleton />

      <div className="px-4 md:px-8 py-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <Skeleton className="h-12 w-12 rounded-md" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-7 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:gap-6">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-[75%] lg:max-w-1/2 mx-auto bg-white border border-gray-200 shadow-md rounded-md flex flex-col gap-3 p-4">
          <Skeleton className="h-5 w-2/3" />
          <div className="flex flex-col gap-2 mt-2">
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
