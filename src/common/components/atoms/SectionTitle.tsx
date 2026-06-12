import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionTitle({ children, as: Tag = "h2", className = "" }: SectionTitleProps) {
  return (
    <Tag className={`text-2xl font-bold text-white sm:text-3xl lg:text-4xl ${className}`}>
      {children}
    </Tag>
  );
}
