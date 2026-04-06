import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/frontend/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-none border px-2.5 py-1 text-[8px] font-black uppercase tracking-widest w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-primary/40 focus-visible:ring-0 transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/5 text-primary",
        secondary:
          "border-white/10 bg-white/5 text-white/50",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-500",
        outline:
          "border-white/10 bg-transparent text-white/40",
        premium:
          "border-amber-500/30 bg-amber-500/10 text-amber-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }




