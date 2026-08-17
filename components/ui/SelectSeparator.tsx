"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "@/utils/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"
import { SelectScrollDownButton } from "./SelectScrollDownButton";
import { SelectScrollUpButton } from "./SelectScrollUpButton";

export const SelectSeparator = ({
  className,
  ...props
}: SelectPrimitive.Separator.Props) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
};
