'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { LabelInputArea } from '../UI/LabelInputArea';
import type { Category, CategorySelectClientProps } from '@/types/props';

export default function CategorySelectClient({
  categories,
}: CategorySelectClientProps) {
  const [selected, setSelected] = useState<Category[]>([]);
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(search.toLowerCase()) &&
      !selected.some((item) => item.id === category.id),
  );

  const addCategory = (category: Category) => {
    setSelected((prev) => [...prev, category]);

    setSearch('');
  };

  const removeCategory = (id: string) => {
    setSelected((prev) => prev.filter((item) => item.id !== id));
  };

  const createCategory = () => {
    const value = search.trim();

    if (!value) return;

    const newCategory = {
      id: crypto.randomUUID(),
      name: value,
    };

    addCategory(newCategory);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createCategory();
    }
  };

  return (
    <LabelInputArea label={CONTENT.create.base.category.label}>
      <input
        type="hidden"
        name="categories"
        value={JSON.stringify(selected.map((item) => item.name))}
      />

      <div
        className="
        min-h-11
        w-full
        rounded-md
        border
        px-3
        py-2
        flex
        flex-wrap
        gap-2
        hover:border-lime-500
        focus-within:border-lime-500
        focus-within:ring-lime-500
      "
      >
        {selected.map((category) => (
          <div
            key={category.id}
            className="
              flex
              items-center
              gap-1
              rounded-full
              bg-gray-100
              px-3
              py-1
              text-sm
              text-sm rounded-md
            "
          >
            {category.name}

            <button type="button" onClick={() => removeCategory(category.id)}>
              <X size={14} />
            </button>
          </div>
        ))}

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Add category..."
          className="
            flex-1
            min-w-32
            outline-none
            p-2 text-sm
          "
        />
      </div>

      {search && (
        <div
          className="
          rounded-md
          border
          bg-white
          p-2
          shadow
        "
        >
          {filteredCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => addCategory(category)}
              className="
                w-full
                rounded
                px-3
                py-2
                text-left
                hover:bg-gray-100
              "
            >
              {category.name}
            </button>
          ))}

          {!filteredCategories.length && (
            <button
              type="button"
              onClick={createCategory}
              className="
                w-full
                px-3
                py-2
                text-left
              "
            >
              Create &quot;{search}&quot;
            </button>
          )}
        </div>
      )}
    </LabelInputArea>
  );
}
