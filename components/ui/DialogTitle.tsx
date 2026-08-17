'use client';

import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { cn } from '@/utils/utils';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { DialogDescription } from "./DialogDescription";

export const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        'font-heading text-base leading-none font-medium',
        className,
      )}
      {...props}
    />
  );
};
