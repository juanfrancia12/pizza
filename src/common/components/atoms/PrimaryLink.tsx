import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function PrimaryLink({ children, href, className = "" }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg bg-[#e63956] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_0_24px_rgba(230,57,86,0.45)] transition hover:bg-[#ff4d6d] ${className}`}
    >
      {children}
    </Link>
  );
}
