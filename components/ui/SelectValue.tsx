"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "@/utils/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"
import { SelectScrollDownButton } from "./SelectScrollDownButton";
import { SelectScrollUpButton } from "./SelectScrollUpButton";
import { SelectSeparator } from "./SelectSeparator";
import { SelectItem } from "./SelectItem";
import { SelectLabel } from "./SelectLabel";
import { SelectContent } from "./SelectContent";
import { SelectTrigger } from "./SelectTrigger";

export const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props}
    />
  )
};
