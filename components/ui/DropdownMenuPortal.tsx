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

export const DropdownMenuPortal = ({ ...props }: MenuPrimitive.Portal.Props) => {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
};
