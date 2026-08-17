import * as React from "react"
import { cn } from "@/utils/utils"
import { CardFooter } from "./CardFooter";
import { CardContent } from "./CardContent";
import { CardAction } from "./CardAction";

export const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
};
