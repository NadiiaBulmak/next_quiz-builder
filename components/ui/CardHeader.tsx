import * as React from "react"
import { cn } from "@/utils/utils"
import { CardFooter } from "./CardFooter";
import { CardContent } from "./CardContent";
import { CardAction } from "./CardAction";
import { CardDescription } from "./CardDescription";
import { CardTitle } from "./CardTitle";

export const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
};
