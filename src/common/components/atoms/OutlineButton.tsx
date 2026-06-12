import Link from "next/link";
import type { ReactNode } from "react";

type OutlineButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function OutlineButton({ children, href, className = "" }: OutlineButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:border-white/40 hover:bg-white/10 ${className}`}
    >
      {children}
    </Link>
  );
}
