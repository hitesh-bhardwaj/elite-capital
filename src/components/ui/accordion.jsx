import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children ,hide, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        `flex flex-1 items-center relative z-[4] mobile:items-start justify-between py-4 font-medium transition-all [&[data-state=open]>.icon-container>.icon>.minus]:rotate-0 [&[data-state=open]>.icon-container>.icon]:bg-body [&[data-state=open]>.icon-container>.icon]:text-black mobile:[&[data-state=open]>.icon-container>.icon]:rotate-[0deg] mobile:[&[data-state=open]>.icon-container>.icon>.minus]:rotate-0 mobile:[&[data-state=open]>.icon-container>.icon]:bg-body mobile:[&[data-state=open]>.icon-container>.icon]:text-black`,
        className
      )}
      {...props}>
      {children}
      <div className={` flex justify-end icon-container items-end relative z-[2] fadein ${hide?"hidden":""} `}>
      <span className="icon h-[3vw] w-[3vw] border border-black rounded-full relative flex items-center justify-center text-body duration-500 ease-out mobile:w-[10vw] mobile:h-[10vw] tablet:w-[8vw] tablet:h-[8vw]">
        
        <span className="minus block w-[1vw] bg-current h-[1.5px] rotate-90 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   duration-500 ease-out mobile:w-[5vw] tablet:w-[3.5vw]"/>
        <span className="w-[1vw] block bg-current h-[1.5px] mobile:w-[5vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  absolute tablet:w-[3.5vw] plus"/>
      </span>

      </div>
      
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
