import type { ReactNode } from "react";

type FeatureHighlightProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureHighlight({ icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  );
}
