import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] text-[1.1vw] w-full border pl-0 tablet:text-[2.2vw] border-black border-t-0 border-l-0 border-r-0 bg-transparent placeholder:text-[1.1vw]  py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus:border-black focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
