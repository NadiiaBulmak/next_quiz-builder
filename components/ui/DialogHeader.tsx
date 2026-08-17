'use client';

import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { cn } from '@/utils/utils';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { DialogDescription } from "./DialogDescription";
import { DialogTitle } from "./DialogTitle";
import { DialogFooter } from "./DialogFooter";

export const DialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
};
