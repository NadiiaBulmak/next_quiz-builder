'use client';
import FilterZone from '@/components/quiz/FilterZone';
import { FilterModalProvider } from '@/components/quiz/FilterModalContext';

export const QuizzesContent = ({
  searchQuery = '',
  children,
}: {
  searchQuery?: string;
  children?: React.ReactNode;
}) => {
  return (
    <FilterModalProvider>
      <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black  bg-white  px-3 md:px-6 py-3 md:py-6 lg:py-0 gap-4  mb-20 lg:mb-0">
        <FilterZone initialSearchQuery={searchQuery} />

        {children}
      </div>
    </FilterModalProvider>
  );
};
