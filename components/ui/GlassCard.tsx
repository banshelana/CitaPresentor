import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(124,58,237,0.15)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-500/30
        `,
        className
      )}
    >
      {children}
    </div>
  );
}