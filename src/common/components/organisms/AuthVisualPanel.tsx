import Image from "next/image";
import type { ReactNode } from "react";

import { GlassCard } from "@/common/components/molecules/GlassCard";
import { SegmentedBar } from "@/common/components/molecules/SegmentedBar";
import { StatCard } from "@/common/components/molecules/StatCard";

type StatItem = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
};

type VisionCard = {
  title: string;
  description: string;
  icon: ReactNode;
  segments: { label: string; color: string; width: string }[];
};

type AuthVisualBackgroundProps = {
  imageSrc: string;
  imageAlt: string;
};

type AuthVisualContentProps = {
  stats: StatItem[];
  vision: VisionCard;
};

type AuthVisualPanelProps = AuthVisualBackgroundProps & AuthVisualContentProps;

const statAnimationClasses = [
  "animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-200 rounded-2xl bg-white/5 backdrop-blur-xs",
  "animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-300 rounded-2xl bg-white/5 backdrop-blur-xs",
];

export function AuthVisualBackground({ imageSrc, imageAlt }: AuthVisualBackgroundProps) {
  return (
    <div className="auth-visual-mask relative h-full min-h-[480px] w-full overflow-hidden animate-fade-in animate-duration-slow animate-fill-mode-both lg:min-h-full backdrop-blur-2xs">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c16]/70 via-transparent to-[#080c16]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c16]/40 via-transparent to-[#080c16]/25" />
    </div>
  );
}

export function AuthVisualContent({ stats, vision }: AuthVisualContentProps) {
  return (
    <div className="flex h-full min-h-[480px] w-full flex-col justify-center gap-4 p-6 lg:min-h-full lg:p-8 xl:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat, index) => (
          <div key={stat.title} className={statAnimationClasses[index] ?? statAnimationClasses[0]}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="mt-2 animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-400 rounded-2xl bg-white/5 backdrop-blur-xs">
      <GlassCard>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-sm font-semibold text-white">{vision.title}</h3> 
          <span className="text-white/70">{vision.icon}</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-300">{vision.description}</p>
        <SegmentedBar segments={vision.segments} />
      </GlassCard>
      </div>
    </div>
  );
}

export function AuthVisualPanel({ imageSrc, imageAlt, stats, vision }: AuthVisualPanelProps) {
  return (
    <div className="relative h-full min-h-[480px] w-full overflow-hidden animate-fade-in-right animate-duration-normal animate-fill-mode-both lg:min-h-full">
      <AuthVisualBackground imageSrc={imageSrc} imageAlt={imageAlt} />
      <div className="absolute inset-0 z-10">
        <AuthVisualContent stats={stats} vision={vision} />
      </div>
    </div>
  );
}
