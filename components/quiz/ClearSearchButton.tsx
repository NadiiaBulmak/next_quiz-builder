'use client';
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { CONTENT } from "@/constants/content";

export const ClearSearchButton = () => {
  const handleClearSearch = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('search');
    params.set('page', '1');
    window.location.search = params.toString();
  };
  return (
    <Button
      type="button"
      className="bg-transparent hover:bg-transparent hover:underline hover:underline-offset-2 cursor-pointer items-center gap-1.5 text-xs font-semibold text-green-700 transition hover:text-green-800 sm:flex"
      onClick={handleClearSearch}
    >
      {CONTENT.common.clear_search}
      <X size={15} />
    </Button>
  );
};
