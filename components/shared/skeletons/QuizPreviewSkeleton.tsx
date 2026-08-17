import { Skeleton } from '@/components/shared/Skeleton';

export function QuizPreviewSkeleton() {
  return (
    <div>
      <div className="flex items-center justify-between bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700">
        <div className="flex flex-col gap-2 ml-3">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-3 w-56" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="w-full flex flex-col gap-3 px-3 md:px-6 py-3 md:py-6">
        <div className="py-4 w-full md:max-w-[75%] lg:max-w-1/2 mx-auto flex justify-between gap-3">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>

        <div className="w-full md:max-w-[75%] lg:max-w-1/2 mx-auto bg-white border border-gray-200 shadow-md rounded-md flex flex-col gap-3 p-4">
          <Skeleton className="h-5 w-2/3" />
          <div className="flex flex-col gap-2 mt-2">
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
