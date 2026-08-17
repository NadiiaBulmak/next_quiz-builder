import * as React from "react"
import { cn } from "@/utils/utils"
import { CardFooter } from "./CardFooter";
import { CardContent } from "./CardContent";
import { CardAction } from "./CardAction";
import { CardDescription } from "./CardDescription";

export const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
};
