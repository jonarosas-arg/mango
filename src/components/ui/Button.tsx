import * as React from "react";
import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-mango-300 text-neutral-950 hover:brightness-110 active:brightness-90",
      secondary: "bg-transparent text-neutral-50 border border-neutral-600 hover:border-mango-300 active:bg-neutral-800",
      ghost: "bg-transparent text-mango-300 hover:bg-mango-300/10 active:bg-mango-300/20",
      danger: "bg-transparent text-bearish border border-bearish hover:bg-bearish-subtle active:brightness-90",
    };

    const sizes = {
      sm: "h-8 px-3 text-[13px]",
      md: "h-11 px-4 text-[15px]",
      lg: "h-[52px] px-5 text-[16px] font-bold uppercase tracking-wider",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.99 }}
        ref={ref}
        disabled={loading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-base font-body font-medium transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-mango-300 focus-visible:outline-offset-[3px]",
          variants[variant],
          sizes[size],
          className,
          loading && "pointer-events-none opacity-70"
        )}
        {...props}
      >
        {children as React.ReactNode}
        {loading && (
          <div className="ml-2 h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
