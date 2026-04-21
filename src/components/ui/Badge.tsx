import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'bullish' | 'bearish' | 'neutral' | 'technical' | 'warning';
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ className, variant = 'neutral', children, ...props }: BadgeProps) {
  const variants = {
    bullish: "bg-bullish-subtle text-bullish",
    bearish: "bg-bearish-subtle text-bearish",
    neutral: "bg-neutral-800 text-neutral-400",
    technical: "bg-cer-subtle text-neutral-cer",
    warning: "bg-warning-subtle text-warning border border-warning/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-micro px-2 py-1 text-[13px] font-data font-medium leading-none h-6 tabular-nums",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
