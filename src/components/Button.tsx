import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "outline" | "solid";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "outline", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500",
                    "border",
                    variant === "outline"
                        ? "border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background"
                        : "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
