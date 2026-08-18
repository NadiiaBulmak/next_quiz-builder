'use client';

import { BarChart3, Settings2, Share2 } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { useState } from 'react';
import { FloatingLabel } from "./FloatingLabel";

export const QuizPreview = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-[650px]" id="demo">
      <div className="absolute -inset-6 rounded-[32px] bg-lime-100/60 blur-2xl" />

      <div className="relative rotate-[1deg] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
        <div className="relative flex min-h-120 w-full overflow-hidden rounded-xl border border-gray-200">
          {isLoading && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-white"
              aria-live="polite"
            >
              <div className="h-20 w-20 animate-spin rounded-full border-8 border-stone-200 border-t-lime-500" />
            </div>
          )}

          <iframe
            className="h-full min-h-120 w-full border-0"
            src="/create-preview"
            title={CONTENT.main.preview_titles.quiz_create}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      <FloatingLabel className="-right-6 top-10" icon={<Settings2 size={14} />}>
        {CONTENT.main.preview_titles.create_in_minutes}
      </FloatingLabel>

      <FloatingLabel
        className="-right-10 bottom-24"
        icon={<Share2 size={14} />}
      >
        {CONTENT.main.preview_titles.share_instantly}
      </FloatingLabel>

      <FloatingLabel
        className="-bottom-5 left-8"
        icon={<BarChart3 size={14} />}
      >
        {CONTENT.main.preview_titles.see_results}
      </FloatingLabel>
    </div>
  );
};