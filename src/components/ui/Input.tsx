import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-[13px] text-neutral-400 font-body font-medium uppercase tracking-[0.06em]">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-14 w-full border-b border-neutral-700 bg-transparent px-0 py-4 text-[15px] font-body text-neutral-50 ring-offset-neutral-950 placeholder:text-neutral-600 focus:border-mango-300 focus:border-b-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-30 disabled:bg-neutral-900 transition-all",
            error && "border-bearish focus:border-bearish",
            props.readOnly && "border-dashed cursor-default",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-[12px] font-body font-medium text-bearish flex items-center">
            <span className="mr-1">⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
