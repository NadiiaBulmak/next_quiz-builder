'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { sortType, type FilterModalProps } from '@/types/props';
import { Difficulty } from '@/types/quiz';
import { cn } from '@/utils/utils';
import { useFilterModal } from './FilterModalContext';

import { CONTENT } from '@/constants/content';

export const FilterModal = ({
  categories,
  initialCategories = [],
  initialDifficulty = '',
  initialSort = '',
}: FilterModalProps) => {
  const { isOpen, setIsOpen } = useFilterModal();
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [sortBy, setSortBy] = useState(initialSort);
  const router = useRouter();

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const applyToUrl = (
    nextCategories: string[],
    nextDifficulty: string,
    nextSort: string,
  ) => {
    const params = new URLSearchParams(window.location.search);

    if (nextCategories.length) {
      params.set('category', nextCategories.join(','));
    } else {
      params.delete('category');
    }

    if (nextDifficulty) {
      params.set('difficulty', nextDifficulty);
    } else {
      params.delete('difficulty');
    }

    if (nextSort) {
      params.set('sortBy', nextSort);
    } else {
      params.delete('sortBy');
    }

    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyToUrl(selectedCategories, difficulty, sortBy);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setDifficulty('');
    setSortBy('');
    applyToUrl([], '', '');
    setIsOpen(false);
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setIsOpen(false)}
      />

      <form
        onSubmit={handleSubmit}
        aria-hidden={!isOpen}
        inert={!isOpen}
        data-filter-open={isOpen}
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 flex max-h-[80vh] flex-col gap-4 overflow-y-auto rounded-t-2xl border border-gray-200 bg-white p-5 shadow-lg scrollbar-stable transition-[width,margin,padding,opacity,transform] duration-300 ease-in-out',
          'lg:static lg:z-auto lg:h-fit lg:max-h-none lg:translate-y-0 lg:shrink-0 lg:overflow-hidden lg:rounded-xl lg:shadow-none',
          isOpen
            ? 'translate-y-0 opacity-100 lg:ml-4 lg:w-1/3'
            : 'pointer-events-none translate-y-full border-0 p-0 opacity-0 lg:ml-0 lg:w-0',
        )}
      >
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="text-base font-semibold text-gray-900">
            {CONTENT.quiz_list.filters.title}
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            {CONTENT.quiz_list.filters.difficulty}
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="h-10 rounded-sm border border-gray-300 bg-gray-100 p-2 text-sm"
          >
            <option value="">{CONTENT.quiz_list.filters.all}</option>
            {Object.values(Difficulty).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            {CONTENT.quiz_list.filters.category}
          </label>
          <div className="flex max-h-40 flex-col gap-2 overflow-y-auto rounded-sm border border-gray-300 bg-gray-100 p-2">
            {categories.length === 0 && (
              <span className="text-sm text-gray-500">
                {CONTENT.quiz_list.filters.no_categories}
              </span>
            )}
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.slug)}
                  onChange={() => toggleCategory(category.slug)}
                  className="h-4 w-4"
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            {CONTENT.quiz_list.filters.sort_by}
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 rounded-sm border border-gray-300 bg-gray-100 p-2 text-sm"
          >
            <option value="">{CONTENT.quiz_list.filters.default_sort}</option>
            {Object.values(sortType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={handleClear}
          >
            {CONTENT.quiz_list.filters.clear}
          </Button>
          <Button type="submit" className="flex-1">
            {CONTENT.quiz_list.filters.apply}
          </Button>
        </div>
      </form>
    </>
  );
};
