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
import { DialogHeader } from "./DialogHeader";
import { DialogContent } from "./DialogContent";
import { DialogOverlay } from "./DialogOverlay";

export const DialogClose = ({ ...props }: DialogPrimitive.Close.Props) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};
