"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { cn } from "@/utils/utils"
import { ChevronRightIcon, CheckIcon } from "lucide-react"
import { DropdownMenuShortcut } from "./DropdownMenuShortcut";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";
import { DropdownMenuRadioItem } from "./DropdownMenuRadioItem";
import { DropdownMenuRadioGroup } from "./DropdownMenuRadioGroup";
import { DropdownMenuCheckboxItem } from "./DropdownMenuCheckboxItem";
import { DropdownMenuSubContent } from "./DropdownMenuSubContent";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger";
import { DropdownMenuSub } from "./DropdownMenuSub";
import { DropdownMenuItem } from "./DropdownMenuItem";

export const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) => {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
};
