"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "@/utils/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"
import { SelectScrollDownButton } from "./SelectScrollDownButton";
import { SelectScrollUpButton } from "./SelectScrollUpButton";
import { SelectSeparator } from "./SelectSeparator";
import { SelectItem } from "./SelectItem";

export const SelectLabel = ({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
};
