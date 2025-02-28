import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-lg border-[1.5px] border-transparent transition-colors",
  {
    variants: {
      variant: {
        primary: cn(
          "bg-orange-500 text-violet-50 hover:bg-orange-600",
          "dark:bg-violet-50 dark:text-violet-700 dark:hover:bg-violet-100",
        ),
        secondary: cn(
          "border-violet-500 bg-violet-100 text-violet-700",
          "dark:bg-grey-600 dark:hover:bg-grey-700 dark:border-violet-300 dark:text-violet-300",
        ),
      },
      size: {
        default: "min-h-11 px-12 py-2 text-sm tracking-wide",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
