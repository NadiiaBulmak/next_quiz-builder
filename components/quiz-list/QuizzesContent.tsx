'use client';
import FilterZone from '@/components/quiz/FilterZone';

export const QuizzesContent = ({
  searchQuery = '',
  children,
}: {
  searchQuery?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black  bg-white  px-3 md:px-6 py-3 md:py-6 gap-4  mb-20 lg:mb-0">
      <FilterZone initialSearchQuery={searchQuery} />
      
      {children}
    </div>
  );
};
