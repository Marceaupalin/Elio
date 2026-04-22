import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-pill text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-elio-coral disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-[2px] active:translate-y-[0px] duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-elio-coral text-white hover:bg-elio-coral-soft shadow-sm hover:shadow-coral group",
        ghost:
          "bg-transparent text-elio-text border border-elio-ink hover:bg-elio-ink hover:text-white",
        outline:
          "border border-elio-border bg-white text-elio-text shadow-sm hover:bg-elio-sand",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
