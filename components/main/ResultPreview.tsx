'use client';

import { CONTENT } from "@/constants/content";
import { useState } from "react";
import type { ResultPreviewProps } from '@/types/props';

export function ResultPreview({id}: ResultPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {/* Browser window */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] shadow-2xl">
        {/* Browser header */}
        <div className="flex h-10 items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

          <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-black/30 px-3">
            <span className="truncate text-[9px] text-slate-500">
              {/* quiz-builder.com/quiz_result/{process.env.RESULT_PREVIEW_ID} */}
            </span>
          </div>
        </div>

        {/* Iframe */}
        <div className="relative h-[520px] bg-white">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
              <div className="h-20 w-20 animate-spin rounded-full border-8 border-stone-200 border-t-lime-500" />
            </div>
          )}

          <iframe
            src={`/quiz_result/${id}`}
            title={CONTENT.main.preview_titles.quiz_result}
            className="h-full w-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}