import { forwardRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TerminalButtonProps extends ButtonProps {
  prefix?: string;
  children?: React.ReactNode;
}

const TerminalButton = forwardRef<HTMLButtonElement, TerminalButtonProps>(
  ({ className, prefix = "$", variant = "default", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-mono transition-colors duration-300",
          variant === "default" && "bg-primary hover:bg-secondary text-primary-foreground",
          variant === "secondary" && "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
          variant === "outline" && "border border-primary text-primary hover:bg-primary hover:bg-opacity-10",
          className
        )}
        {...props}
      >
        {prefix && <span className="mr-2">{prefix}</span>}
        {children}
      </Button>
    );
  }
);

TerminalButton.displayName = "TerminalButton";

export { TerminalButton };
