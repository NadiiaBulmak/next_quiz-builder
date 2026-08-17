import { Skeleton } from '@/components/shared/Skeleton';

const SharedQuizTopContentSkeleton = () => {
  return (
    <div className="flex w-full items-center justify-between px-6 md:px-8 lg:px-20 py-6 pb-0">
      <Skeleton className="h-8 w-28" />
      <Skeleton className="h-9 w-32 rounded-lg" />
    </div>
  );
};

export function QuizResultSkeleton() {
  return (
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      <SharedQuizTopContentSkeleton />

      <div className="min-h-screen px-4 py-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-6 md:px-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="flex flex-1 flex-col gap-2">
                  <Skeleton className="h-7 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-4 md:p-6 md:grid-cols-[minmax(0,6fr)_minmax(300px,4fr)] md:p-8">
              <div className="flex flex-col gap-6">
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>

              <aside className="flex flex-col gap-4">
                <Skeleton className="h-32 w-full rounded-xl" />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
