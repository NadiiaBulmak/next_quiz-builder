'use client';

import { SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CONTENT } from '@/constants/content';

export default function FilterZone({
  initialSearchQuery = '',
}: {
  initialSearchQuery?: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

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
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full gap-3">
      <Input
        type="search"
        placeholder={CONTENT.quiz_list.search_placeholder}
        className="h-10 flex-1 rounded-sm border-1 border-gray-300 bg-gray-100 p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex gap-2 h-full">
        <Button className="max-h-full" type="submit">
          Search
        </Button>

        <Button
          // type="button"

          className="p-2 h-full flex bg-gray-100 rounded-sm cursor-pointer border-1 border-gray-300 hover:bg-gray-200"
        >
          <SlidersHorizontal className="text-black" width={24} height={24} />
        </Button>
      </div>
    </form>
  );
}
