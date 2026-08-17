"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"

import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { AlertDialogCancel } from "./AlertDialogCancel";
import { AlertDialogAction } from "./AlertDialogAction";
import { AlertDialogDescription } from "./AlertDialogDescription";
import { AlertDialogTitle } from "./AlertDialogTitle";
import { AlertDialogMedia } from "./AlertDialogMedia";
import { AlertDialogFooter } from "./AlertDialogFooter";
import { AlertDialogHeader } from "./AlertDialogHeader";
import { AlertDialogContent } from "./AlertDialogContent";
import { AlertDialogOverlay } from "./AlertDialogOverlay";
import { AlertDialogPortal } from "./AlertDialogPortal";
import { AlertDialogTrigger } from "./AlertDialogTrigger";

export const AlertDialog = ({ ...props }: AlertDialogPrimitive.Root.Props) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
};

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
