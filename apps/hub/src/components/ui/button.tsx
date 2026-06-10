import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
          variant === "outline" &&
            "border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900",
          variant === "ghost" && "hover:bg-neutral-100 dark:hover:bg-neutral-900",
          size === "default" && "h-10 px-4 py-2 text-sm",
          size === "sm" && "h-8 px-3 text-xs",
          size === "lg" && "h-11 px-6 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
