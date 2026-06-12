import { RocketIcon } from "@/common/components/icons/RocketIcon";
import { ShieldIcon } from "@/common/components/icons/ShieldIcon";
import { StarIcon } from "@/common/components/icons/StarIcon";
import type { ReactNode } from "react";

type FeaturePillProps = {
  icon: string;
  title: string;
  description: string;
};

const iconMap: Record<string, ReactNode> = {
  discount: <ShieldIcon className="h-5 w-5 text-[#e63956]" />,
  welcome: <RocketIcon className="h-5 w-5 text-[#f5c542]" />,
  points: <StarIcon className="h-5 w-5 text-[#f5c542]" />,
  delivery: <RocketIcon className="h-5 w-5 text-[#4a9eff]" />,
};

export function FeaturePill({ icon, title, description }: FeaturePillProps) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm px-4 py-3 transition duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="shrink-0 transition duration-300 group-hover:scale-110">{iconMap[icon] ?? iconMap.discount}</div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}
