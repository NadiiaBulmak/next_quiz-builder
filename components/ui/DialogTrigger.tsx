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
import { DialogClose } from "./DialogClose";
import { DialogPortal } from "./DialogPortal";

export const DialogTrigger = ({ ...props }: DialogPrimitive.Trigger.Props) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};
