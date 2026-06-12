import type { ReactNode } from "react";

import { GlassCard } from "@/common/components/molecules/GlassCard";

type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
};

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <GlassCard>
      <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        <span>{title}</span>
        <span className="text-white/70">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
    </GlassCard>
  );
}
