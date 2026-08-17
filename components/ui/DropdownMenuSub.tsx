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

export const DropdownMenuSub = ({ ...props }: MenuPrimitive.SubmenuRoot.Props) => {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
};
