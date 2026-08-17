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
import { SelectValue } from "./SelectValue";

const Select = SelectPrimitive.Root

export const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
