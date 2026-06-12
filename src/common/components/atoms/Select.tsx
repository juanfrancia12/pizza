import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full appearance-none rounded-lg border border-white/10 bg-[#12182a]/80 px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6b8a]/50 focus:ring-1 focus:ring-[#ff6b8a]/30 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
