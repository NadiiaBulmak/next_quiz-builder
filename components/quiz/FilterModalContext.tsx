'use client';
import { createContext, useContext, useState } from 'react';

type FilterModalContextValue = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const FilterModalContext = createContext<FilterModalContextValue | null>(null);

export const FilterModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FilterModalContext.Provider>
  );
};

export const useFilterModal = () => {
  const context = useContext(FilterModalContext);

  if (!context) {
    throw new Error('useFilterModal must be used within a FilterModalProvider');
  }

  return context;
};
