import * as React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
    ({ className, variant = "default", ...props }, ref) => {
      const base =
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
      const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline:
            "border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white",
      };
      return (
          <button
              ref={ref}
              className={cn(base, variants[variant] || variants.default, className)}
              {...props}
          />
      );
    }
);

Button.displayName = "Button";
