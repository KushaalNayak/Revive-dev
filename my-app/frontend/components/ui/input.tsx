import * as React from "react"

import { cn } from "@/frontend/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-[#666] selection:bg-[#00FF66]/30 selection:text-white border-[#373737] h-12 w-full min-w-0 rounded-[8px] border bg-[#121212] px-4 py-2 text-[14px] font-sans transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-[#00FF66] focus-visible:bg-[#1a1a1a]",
        "aria-invalid:border-red-500/50",
        className
      )}
      {...props}
    />
  )
}

export { Input }




