import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[#0d1220]/55 p-5 shadow-xl backdrop-blur-xs ${className}`}
    >
      {children}
    </div>
  );
}
