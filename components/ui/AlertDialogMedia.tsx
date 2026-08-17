"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { AlertDialogCancel } from "./AlertDialogCancel";
import { AlertDialogAction } from "./AlertDialogAction";
import { AlertDialogDescription } from "./AlertDialogDescription";
import { AlertDialogTitle } from "./AlertDialogTitle";

export const AlertDialogMedia = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      )}
      {...props}
    />
  )
};
