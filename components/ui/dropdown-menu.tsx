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
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuGroup } from "./DropdownMenuGroup";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";
import { DropdownMenuPortal } from "./DropdownMenuPortal";

export const DropdownMenu = ({ ...props }: MenuPrimitive.Root.Props) => {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
};

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
