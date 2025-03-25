import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-8 w-full !border-b text-[1.1vw]  !border-black border-t-0 border-l-0 border-r-0  pl-[0] bg-transparent placeholder:text-[1.1vw] py-2 pb-[1vw] tablet:text-[2.2vw]  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed focus:ring-0 !focus:outline-none disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
