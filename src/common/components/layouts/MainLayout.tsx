import type { ReactNode } from "react";

import { SiteFooter } from "@/common/components/organisms/SiteFooter";
import { SiteHeader } from "@/common/components/organisms/SiteHeader";
import { StarfieldBackground } from "@/common/components/layouts/StarfieldBackground";

type MainLayoutProps = {
  children: ReactNode;
  starCount?: number;
};

export function MainLayout({ children, starCount = 60 }: MainLayoutProps) {
  return (
    <StarfieldBackground
      gradientClassName="background-primary"
      starCount={starCount}
      className="min-h-screen"
    >
      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </StarfieldBackground>
  );
}
