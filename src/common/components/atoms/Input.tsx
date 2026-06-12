import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-white/10 bg-[#12182a]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#ff6b8a]/50 focus:ring-1 focus:ring-[#ff6b8a]/30 ${className}`}
      {...props}
    />
  );
}
