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

export const AlertDialogPortal = ({ ...props }: AlertDialogPrimitive.Portal.Props) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
};
