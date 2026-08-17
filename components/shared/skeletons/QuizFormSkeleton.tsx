import { Skeleton } from '@/components/shared/Skeleton';

function QuestionCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-gray-200 p-4">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-10 w-full rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-full rounded-md" />
        <Skeleton className="h-8 w-full rounded-md" />
        <Skeleton className="h-8 w-full rounded-md" />
      </div>
    </div>
  );
}

export function QuizFormSkeleton() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50 px-3 md:px-6 py-3 md:py-6 grid grid-cols-1 md:grid-cols-[4fr_6fr] md:gap-3 w-full mb-20 lg:mb-0">
      <div className="w-full flex flex-col gap-6 order-first bg-white p-6 rounded-md shadow-sm border border-gray-200 md:order-none h-fit">
        <Skeleton className="h-5 w-40" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-20 w-full rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 col-span-full md:col-span-1 md:col-start-2 md:row-start-1 bg-white p-6 rounded-md shadow-sm border border-gray-200 h-fit">
        <div>
          <Skeleton className="h-5 w-44" />
          <Skeleton className="mt-2 h-3 w-24" />
        </div>

        <div className="flex flex-col gap-4">
          <QuestionCardSkeleton />
          <QuestionCardSkeleton />
        </div>
      </div>
    </div>
  );
}
