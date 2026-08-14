'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export const BackButton = () => (
  <Button
  variant="outline"
  className="h-full w-fit min-h-10 px-3 border border-lime-300 hover:bg-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
    onClick={() => window.history.back()}
  >
    <ChevronLeft width={40} height={40} strokeWidth={2} />
  </Button>
);
