import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full rounded-lg bg-[#e63956] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_24px_rgba(230,57,86,0.45)] transition hover:bg-[#ff4d6d] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
