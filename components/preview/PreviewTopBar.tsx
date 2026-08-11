'use client';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

type PreviewTopBarProps = {
  title?: string | null;
  description?: string | null;
  questionCount: number;
};

export default function PreviewTopBar({
  title,
  description,
  questionCount,
}: PreviewTopBarProps) {
  const pathname = window.location.pathname;
  const showBackButton = pathname.includes('/quiz/');
  const handleBackClick = () => window.history.back();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-black p-4 py-3 border-b border-gray-300 dark:border-gray-700">
      {!showBackButton && (
        <Button onClick={handleBackClick}>
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-col gap-0 ml-3">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-sm text-muted-foreground">
        {questionCount} Questions
      </div>
      {/* <SidebarBottom name={name} email={email} opened={opened} /> */}
    </div>
  );
}
