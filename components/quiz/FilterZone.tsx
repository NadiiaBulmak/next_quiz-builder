'use client';

import { SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { useFilterModal } from './FilterModalContext';
import type { FilterZoneProps } from '@/types/props';

export const FilterZone = ({ initialSearchQuery = '' }: FilterZoneProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [isPending, startTransition] = useTransition();
  const { setIsOpen, isOpen } = useFilterModal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const normalizedQuery = searchQuery.trim();

    if (normalizedQuery) {
      params.set('search', normalizedQuery);
    } else {
      params.delete('search');
    }

    params.set('page', '1');

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isPending}
      className="flex w-full flex-col gap-4 bg-zinc-50 py-3 opacity-100 transition-opacity duration-200 md:flex-row md:gap-3"
      style={{ opacity: isPending ? 0.7 : 1 }}
    >
      <Input
        type="search"
        placeholder={CONTENT.quiz_list.search_placeholder}
        className="h-11 min-w-0 flex-1 rounded-sm border-1 border-gray-300 bg-gray-100 p-3 lg:h-10 lg:p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={isPending}
      />
      <div className="flex w-full gap-3 md:w-auto md:gap-2">
        <Button
          className="h-11 flex-1 px-6 cursor-pointer transition-opacity duration-200 lg:h-10 md:flex-none"
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending
            ? CONTENT.quiz_list.filters.searching
            : CONTENT.quiz_list.filters.search}
        </Button>

        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="h-11 w-fit flex-1 gap-2 px-4 cursor-pointer transition-opacity duration-200 lg:h-10 lg:px-6 md:flex-none"
          disabled={isPending}
        >
          <SlidersHorizontal size={16} />
          {CONTENT.quiz_list.filters.open}
        </Button>
      </div>
    </form>
  );
};
