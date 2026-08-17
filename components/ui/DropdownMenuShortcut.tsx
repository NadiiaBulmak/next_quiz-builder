"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { cn } from "@/utils/utils"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
};
