'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { CheckCheck, Link as LinkIcon } from 'lucide-react';

export const CopyPreviewLinkButton = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/quiz/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button
      className="rounded-md border border-black bg-black px-3 py-2 font-semibold text-white cursor-pointer transition-all duration-150 hover:bg-black hover:border-lime-500 hover:shadow-[0_0_0_2px_rgba(132,204,22,0.25)]"
      onClick={handleCopyLink}
    >
      {!copied ? (
        <LinkIcon width={24} height={24} />
      ) : (
        <CheckCheck width={24} height={24} />
      )}
    </Button>
  );
};
