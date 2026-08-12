import { List } from 'lucide-react';

import { Quiz } from '@/types/quiz';

export const QuizInfo = ({ title, description, difficulty, categories }: Pick<Quiz, 'title' | 'description' | 'difficulty' | 'categories'>) => {
  return (
    <div className="flex flex gap-4">
      <div className="bg-gray-500 rounded-md text-white w-12 h-12 flex items-center justify-center mt-1 bg-lime-200">
        <List className="text-green-800" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex gap-3 text-sm mt-4 flex-col lg:flex-row">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Difficulty:</span>
            <span className="font-bold">{difficulty.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Categories:</span>
            <span className="font-bold">
              {categories?.map((category) => category.name).join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
