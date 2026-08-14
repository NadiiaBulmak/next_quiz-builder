'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const router = useRouter();

  if (totalPages <= 1) {
    return null;
  }

  const changePage = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    params.set('page', String(page));
    router.push(`?${params.toString()}`);
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1 border-t border-stone-100 px-4 py-3"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Previous page"
        className="mr-2 cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Button
            key={page}
            type="button"
            variant={page === currentPage ? 'secondary' : 'ghost'}
            size="icon-sm"
            className={`cursor-pointer ${page === currentPage ? 'bg-lime-300 text-green-700 hover:bg-lime-700 hover:text-white' : ''}`}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
            onClick={() => changePage(page)}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Next page"
        className="ml-2 cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </nav>
  );
};
