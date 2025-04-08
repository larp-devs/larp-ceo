import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AsciiBoxProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function AsciiBox({
  children,
  className,
  hoverEffect = false,
}: AsciiBoxProps) {
  return (
    <div
      className={cn(
        "relative border border-primary p-5 rounded",
        hoverEffect && "hover:border-accent transition-colors duration-300",
        className
      )}
    >
      {/* Corner marks */}
      <span className="absolute top-0 left-0 text-primary -translate-x-1/2 -translate-y-1/2">+</span>
      <span className="absolute top-0 right-0 text-primary translate-x-1/2 -translate-y-1/2">+</span>
      <span className="absolute bottom-0 left-0 text-primary -translate-x-1/2 translate-y-1/2">+</span>
      <span className="absolute bottom-0 right-0 text-primary translate-x-1/2 translate-y-1/2">+</span>
      
      {children}
    </div>
  );
}
