import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/frontend/lib/utils"

const alertVariants = cva(
    "relative w-full rounded-none border p-6 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-1px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-7 [&>svg]:text-foreground bg-black/40",
    {
        variants: {
            variant: {
                default: "border-white/10 text-white/80",
                destructive:
                    "border-red-500/50 bg-red-500/5 text-red-500 [&>svg]:text-red-500",
                warning:
                    "border-amber-500/50 bg-amber-500/5 text-amber-500 [&>svg]:text-amber-500",
                info:
                    "border-primary/50 bg-primary/5 text-primary [&>svg]:text-primary",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("mb-2 font-black uppercase tracking-widest text-[10px] tech-label", className)}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-xs font-mono lowercase opacity-60 [&_p]:leading-relaxed", className)}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
