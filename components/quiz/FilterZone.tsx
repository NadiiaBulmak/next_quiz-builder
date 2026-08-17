'use client';

import { SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';
import { useFilterModal } from './FilterModalContext';

export default function FilterZone({
  initialSearchQuery = '',
}: {
  initialSearchQuery?: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
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
    router.push(`?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky top-20 z-30 flex w-full flex-col gap-3 bg-zinc-50 p-3 md:flex-row"
    >
      <Input
        type="search"
        placeholder={CONTENT.quiz_list.search_placeholder}
        className="h-10 flex-1 rounded-sm border-1 border-gray-300 bg-gray-100 p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex gap-2 h-full">
        <Button className="px-6 h-full cursor-pointer" type="submit">
          Search
        </Button>

        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit gap-2 px-6 h-full cursor-pointer"
        >
          <SlidersHorizontal size={16} />
          Filters
        </Button>
      </div>
    </form>
  );
}
