import type { ReactNode } from "react";

import { StarfieldBackground } from "@/common/components/layouts/StarfieldBackground";

type CenteredAuthLayoutProps = {
  children: ReactNode;
  contentMaxWidth?: string;
  /** Props opcionales del efecto de estrellas. */
  starfield?: {
    enabled?: boolean;
    starCount?: number;
  };
};

export function CenteredAuthLayout({
  children,
  contentMaxWidth = "max-w-md",
  starfield,
}: CenteredAuthLayoutProps) {
  return (
    <StarfieldBackground
      enabled={starfield?.enabled}
      starCount={starfield?.starCount}
      gradientClassName="auth-gradient-bg"
      className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6"
    >
      <div
        className={`w-full ${contentMaxWidth} animate-fade-in-up animate-duration-normal animate-fill-mode-both`}
      >
        {children}
      </div>
    </StarfieldBackground>
  );
}
