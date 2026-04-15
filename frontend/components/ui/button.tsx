import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/frontend/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-1 focus-visible:ring-primary/50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-primary/90",
        premium: "bg-white text-black hover:bg-white/90",
        destructive: "border border-red-500/50 bg-red-500/5 text-red-500 hover:bg-red-500/10",
        outline: "border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20",
        secondary: "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        hud: "border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-9 px-4 text-[10px]",
        lg: "h-14 px-10 text-sm",
        xl: "h-20 px-16 text-base tracking-[0.2em]",
        icon: "size-12",
        "icon-sm": "size-9",
        "icon-lg": "size-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }




