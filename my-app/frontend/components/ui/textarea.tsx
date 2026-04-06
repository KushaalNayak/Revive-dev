import * as React from "react"

import { cn } from "@/frontend/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[#373737] placeholder:text-[#666] focus-visible:border-[#00FF66] focus-visible:bg-[#1a1a1a] aria-invalid:border-red-500/50 flex min-h-24 w-full rounded-[8px] border bg-[#121212] px-4 py-4 text-[14px] font-sans transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }




