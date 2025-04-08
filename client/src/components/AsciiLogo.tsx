import { LARP_CEO_LOGO } from "@/lib/ascii-art";

interface AsciiLogoProps {
  className?: string;
}

export function AsciiLogo({ className = "" }: AsciiLogoProps) {
  return (
    <pre className={`text-primary text-xs sm:text-sm md:text-base lg:text-lg overflow-x-auto scrollbar-hide whitespace-pre leading-tight inline-block text-left ${className}`}>
      {LARP_CEO_LOGO}
    </pre>
  );
}
